import { useState } from "react"
import '../styles/contact.css'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
    <div id="contact">
      <form className="centrar" action="https://formsubmit.co/juanfrancitorra@gmail.com" method="POST">
        <div className="form-group">
    <h1>Contact</h1>
          <input placeholder="Your Name" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <i></i>
        </div>
        <div className="form-group">
          <input placeholder="Your Email" type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <i></i>
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <i></i>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    
    </>
  )
}

export default Contact