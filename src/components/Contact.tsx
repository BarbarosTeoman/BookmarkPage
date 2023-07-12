import { useState } from "react"

export default function Contact() {

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = (_e: any) => {
    if (isValidEmail(email)) {
      setError(false)  
      setSuccess(true)    
      setMessage(true)
    } else {
      setError(true)
      setSuccess(false) 
      setMessage(true)
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
            {message &&
              <>
                {error &&
                  <img src="src\assets\icon-error.svg" alt="" />
                }
                <div style={error ? {backgroundColor: "var(--softRed)"} : {backgroundColor: "var(--veryDarkBlue)"}} className="messageDiv"><span>{error ? <em>Whoops, make sure it's an email</em> : <em>You've successfully subscribed</em>}</span></div>
              </>
            }
          </div>
          <button onClick={handleSubmit}>Contact Us</button>
        </div>
      </div>
    </div>
  )
}