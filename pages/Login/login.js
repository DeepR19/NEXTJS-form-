import styles from '../../styles/Home.module.css'

function Login() {
  return (
    <form className={styles.login}>
              <h3>Login Form</h3>
              <div className={styles.username}>
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder='Enter your name...' />
              </div>
              <div className={styles.email}>
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder='Enter your email...' />
              </div>
              <div className={styles.password}>
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder='Enter your password...' />
              </div>
              <p>Don't have an account? <span>click here</span></p> 
              <button> Login Here</button>
            </form>
  )
}

export default Login