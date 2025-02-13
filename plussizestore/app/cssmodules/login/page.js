// import Image from 'next/image';
import styles from "../cssmodules/auth.module.css"

export default function Login() {
    return (
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <form>
              <h3>Login</h3>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className={styles.formlabel}>Email Address</label>
                <input type="email" className={styles.formcontrol} id="exampleFormControlInput3" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput4" className={styles.formlabel}>Password</label>
                <input type="password" className={styles.formcontrol} id="exampleFormControlInput4" placeholder="Enter password" />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary loginbtn">Login</button>
              </div>
            </form>
          </div>
        </div>
    );
  }
  