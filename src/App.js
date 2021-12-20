import {useState, useEffect} from 'react'
import {encryptMsg, decryptMsg} from './utils/index.js'
import swal from 'sweetalert';
import {ru, en} from './utils/lang.js'

function App() {

  const [secretKey, setSecretKey] = useState('')
  const [message, setMessage] = useState('') 
  const [lang, setLang] = useState(en)

useEffect(() => {
    document.title = lang.title 
    }, [lang])

const encryptHandler = (e) => {
  e.preventDefault();
  // Encrypt
const res = encryptMsg(message, secretKey)
 if (res) {
  setMessage(res)
  setSecretKey('')
  swal(lang.success, lang.encryptedMsg, "success");
 } else {
  swal(lang.warning, lang.encryptedMsgFailed, "warning");
 }
}

const decryptHandler = (e) => {
  e.preventDefault()
   // Decrypt
const res = decryptMsg(message, secretKey)

if (res) {
  setMessage(res)
  setSecretKey('')
  swal(lang.success, lang.decryptedMsg, "success");
} else {
  swal(lang.warning, lang.decryptedMsgFailed, "warning");
}
}

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-md-12 text-center'>

          <span className='ru'
          onClick={() => setLang(ru)}
          > 🇷🇺 Русский</span>
          
          <span className='en'
          onClick={() => setLang(en)}
          > 🇺🇸 English </span>
          
        </div>
        <div className='col-md-12 text-center github'>
          <h2>{lang.title} by 
          <a href='https://github.com/jsdeemon' target={'_blank'} rel='noreferrer'> <i className="fa-brands fa-github"></i> jsdeemon</a>
          </h2></div>
        
        <div className='col-xs-12 col-md-12 col-lg-12 main'>
    <form>
  <div className="form-group">
    <label htmlFor="secretKey">{lang.secretKey}</label>
    <input type="text" className="form-control" id="secretKey" placeholder={lang.typeSecretKey}
    value={secretKey}
    onChange={(e) => setSecretKey(e.target.value)}
    />
  </div>
  <div className="form-group">
  <label htmlFor="text">{lang.text}</label>
    <textarea className="form-control" id="text" name="text" rows="7" cols="50"
    onChange={(e) => setMessage(e.target.value)}
    value={message}
    >
    </textarea>
    </div>

    <div className='row'>
    <div className='d-grid gap-2 col-xs-12 col-md-6 col-lg-6'>
    <button
     type="submit" 
     className="btn btn-primary btn-lg" 
     onClick={encryptHandler}
     disabled={!secretKey || !message}
     ><i className="fa-solid fa-lock"></i> {lang.encrypt}</button>
    </div>
   
    <div className='d-grid gap-2 col-xs-12 col-md-6 col-lg-6'>
    <button
     type="submit" 
     className="btn btn-success btn-lg" 
     onClick={decryptHandler}
     disabled={!secretKey || !message}
     ><i className="fa-solid fa-lock-open"></i> {lang.decrypt}</button>
     </div>
     </div>
</form>
</div>

    </div>
    </div>
  );
}

export default App;
