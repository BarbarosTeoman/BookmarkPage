import { useState } from "react"

export default function Contact() {

  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false)

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = (_e: any) => {

    if (isValidEmail(email)) {
      setError(false)      
    } else {
      setError(true)
    }
  };

  return (
    <div className="contactMain">
      <div className='contact'>
        <p>35.000+ ALREADY JOINED</p>
        <h2>Stay up-to-date with what we're doing</h2>
        <div className='inputGroup'>
          <div className="inputAndButton">
            <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Enter your email address' />
            <img style={error? {visibility: "unset"} : {}} src="src\assets\icon-error.svg" alt="" />
            <div className={error ? "errorDiv error" : "errorDiv"}><span><em>Whoops, make sure it's an email</em></span></div>
          </div>
          <button onClick={handleSubmit}>Contact Us</button>
        </div>
      </div>
    </div>
  )
}