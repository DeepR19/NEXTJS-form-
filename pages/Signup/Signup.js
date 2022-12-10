import styles from '../../styles/Home.module.css'


function Signup() {
    return (
        <form className={styles.Signup}>
        <h3>Signup Form</h3>
          <div className={styles.username}>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder='Enter your name...' />
          </div>
          <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='Enter your email...' />
          </div>
          <div className={styles.spassword}>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter your password...' />
          </div>
          <div className={styles.spassword}>
              <label htmlFor="repassword">Password Again</label>
              <input type="password" placeholder='Type again your password...' />
          </div>
          <p>Already have an account? <span>click here</span></p> 

          <button> Signup Here</button>
        </form>
    )
  }
  
  export default Signup