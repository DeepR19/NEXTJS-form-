import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Signup from "./Signup/Signup"
import Login from "./Login/login"

export default function Home() {
 
  return (
    <div className={styles.container}>
        <div className={styles.main}>

          {/* Form section */}
          <div className={styles.form}>
              <Login/>
              <Signup/>
          </div>
           

          {/* Images section */}
          <div className={styles.image}>
            <Image alt="pic" className={styles.image} width={500}  height={500} src="/iamge.png"/>
          </div>
        </div>
    </div>
  )
}
