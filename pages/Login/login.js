import styles from '../../styles/Home.module.css'
import {useForm} from "react-hook-form"


let tog = true;
function Login() {
  const {register , handleSubmit, formState: {errors}} = useForm();

  const check = (d) => {
    alert(d.name + ' from ' + d.email)
}
  
  const handleClick = ()=>{
    const main = document.querySelector(".Home_login___4DHh")
    if(tog){
      main.style.cssText = "opacity: .6; width: 0; height: 0; visibility: hidden;"
    }else{
      main.style.cssText = "opacity: 1 ; width: 100%; height: 100%; visibility: visible;"
    }
    tog = !tog;
  }
  return (
    <form className={styles.login}  onSubmit={handleSubmit(check)}>
              <h3>Login Form</h3>
              <div className={styles.username}>
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder='Enter your name...' {...register("name", {required: true})}/>
                  {errors.name && errors.name.type == 'required' && <p className={styles.danger}>Please Enter the username</p>}
              </div>
              <div className={styles.email}>
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder='Enter your email...'  {...register("email", {required: true})}/>
                  {errors.email && errors.email.type == 'required' && <p className={styles.danger}>Please Enter the email</p>}
              </div>
              <div className={styles.password}>
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder='Enter your password...'  {...register("password", {required: true, minLength: 8})}/>
                  {errors.password && errors.password.type == 'required' && <p className={styles.danger}>Please Enter the password</p>}
                  {errors.password && errors.password.type == 'minLength' && <p className={styles.warning}>password must be greater than 8</p>}
              </div>
              <p>Don't have an account? <span onClick={handleClick}>click here</span></p> 
              <button> Login Here</button>
            </form>
  )
}

export default Login