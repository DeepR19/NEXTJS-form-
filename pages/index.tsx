import Signup from "./Signup/Signup"
import Login from "./Login/login"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.main}>

          <div className={styles.form}>
              <Login/>
              <Signup/>
          </div>

        </div>
    </div>
  )
}
