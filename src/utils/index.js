const CryptoJS = require("crypto-js"); 


export function encryptMsg(message, secretKey) {
     secretKey = secretKey.trim()
     // Encrypt
     try {
          const ciphertext = CryptoJS.AES.encrypt(message, secretKey).toString();
          return ciphertext;
     } catch (e) {
// console.log('Error');
     }
     return null

}

export function decryptMsg(message, secretKey) {
     secretKey = secretKey.trim()
     // Decrypt
     try {
          const bytes  = CryptoJS.AES.decrypt(message, secretKey);
          const originalText = bytes.toString(CryptoJS.enc.Utf8);
          return originalText
     } catch(e) {
       //   console.log(e);
     }
return null
}