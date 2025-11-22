import { useState } from "react"


const Contact = ({gender}) => {
   

  const [name, setName] = useState(' ');

  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')

  const handleName =(e)=>{
   setName(e.target.value)
  }

  const handleEmail =(e)=>{
   setEmail(e.target.value)
  }

  const handlePassword =(e)=>{
   setPassword(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(`${name} ${email} ${password}`)
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="contact-container">
       <h1>THIS IS OUR CONTACT PAGE</h1>
       <h3>{gender}</h3>

       <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" value={name} onChange={handleName}/>
        <input  type="email" placeholder="Enter your email" value={email} onChange={ handleEmail}/>
        <input type="password"  value={password} onChange={handlePassword}/>
        <button type="submit">Submit</button>
       </form>
       <p>Hello</p>
    </div>
  )
}

export default Contact