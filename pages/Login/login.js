import {useState} from "react"
import jwt from "jsonwebtoken"
import styles from '../../styles/Home.module.css'


let tog = true;
function Login() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('You are not logged in')

// admin authentication
  const handleSend = async (e) => {

      // prevent refresh page
      e.preventDefault();
      
      // call server in nextjs
      // call api persent in api->login
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password})
      }).then(data => data.json());
      
      const token = res.token;  
      
      if(token){
        const json = jwt.decode(token) 
        setMessage(`Welcome ${json.username} and you are ${json.admin ? "an admin" : "not an admin"}`)
      }else{
        setMessage('Something went wrong!!')
      }

  }
  

    // this function handle click here span

  const handleClick = ()=>{
    const main = document.querySelector(".Home_login___4DHh")
    const main1 = document.querySelector(".Home_Signup__AVwJh")

    if(tog){
      main.style.cssText = "opacity: 0  ; width: 0; height: 0; visibility: hidden;"
      main1.style.cssText ="opacity: 1 ; width: 100%; height: 100%; visibility: visible; marginBottom: 10vh;"         
    }else{
      main.style.cssText = "opacity: 1 ; width: 100%; height: 100%; visibility: visible; marginBottom: 10vh;"
      main1.style.cssText = "opacity: 0  ; width: 0; height: 0; visibility: hidden;"          
    }
    tog = !tog;
  }

  return (
    <>
    <form className={styles.login}>
            <h1>{message}</h1>    
              <h3>Login Form</h3>
              <div className={styles.username}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder='Enter your name...' 
                  />
                  
              </div>
              <div className={styles.email}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Enter your email...'  
                  />

              </div>
              <div className={styles.password}>
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    name='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='Enter your password...'  
                  />
              </div>
              <p>Don't have an account? <span onClick={handleClick}>click here</span></p> 
              
              <button onClick={handleSend}> Login Here</button>
            </form>
            </>
  )
}

export default Login