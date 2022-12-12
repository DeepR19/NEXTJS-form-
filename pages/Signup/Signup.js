import {useForm} from "react-hook-form"
import styles from '../../styles/Home.module.css'

function Signup() {
    let tog = false
    const {register , handleSubmit, formState: {errors}} = useForm();
   
    const check = (d) => {
        alert(d.name + ' from ' + d.email)
    }


    // this function handle click here span
    const handleClick = ()=>{
        const main = document.querySelector(".Home_login___4DHh")
        const main1 = document.querySelector(".Home_Signup__AVwJh")
        
        if(tog){
            main.style.cssText = "opacity: 0; width: 0; height: 0; visibility: hidden;"
            main1.style.cssText = "opacity: 1; width: 100%; height: 100%; visibility: visible; marginBottom: 10vh;"           
        }else{
            main.style.cssText = "opacity: 1; width: 100%; height: 100%; visibility: visible; marginBottom: 10vh;"
            main1.style.cssText = "opacity: 0; width: 0; height: 0; visibility: hidden;"           
        }
        tog = !tog;
      }


    return (
        <form className={styles.Signup} onSubmit={handleSubmit(check)}>
        <h3>Signup Form</h3>
          <div className={styles.username}>
              <label htmlFor="name">Name</label>
              <input type="text"  
                    placeholder='Enter your name...' 
                    {...register("name", {required: true})}
                />

              {errors.name && errors.name.type == 'required' && <p className={styles.danger}>Please Enter the username</p>}
          </div>
          <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input type="email" 
                    placeholder='Enter your email...' 
                    {...register("email", {required: true})}
                /> 
              
              {errors.email && errors.email.type == 'required' && <p className={styles.danger}>Please Enter the email</p>}
          </div>
          <div className={styles.spassword}>
              <label htmlFor="password">Password</label>
              <input type="password" 
                    placeholder='Enter your password...' 
                    {...register("password", {required: true, minLength: 9})}
                />
              
              {errors.password && errors.password.type == 'required' && <p className={styles.danger}>Please Enter the password</p>}
              {errors.password && errors.password.type == 'minLength' && <p className={styles.warning}>password must be greater than 8</p>}
          </div>
          <div className={styles.spassword}>
              <label htmlFor="repassword">Password Again</label>
              <input type="password" 
                    placeholder='Type again your password...' 
                    {...register("repassword", {required: true, minLength: 9})}
                />
              
              {errors.repassword && errors.repassword.type == 'required' && <p className={styles.danger}>Please Enter the repassword</p>}
              {errors.repassword && errors.repassword.type == 'minLength' && <p className={styles.warning}>password must be greater than 8</p>}
          </div>
          
          <p>Already have an account? <span onClick={handleClick}>click here</span></p> 

          <button> Signup Here</button>
        </form>
    )
  }
  
  export default Signup