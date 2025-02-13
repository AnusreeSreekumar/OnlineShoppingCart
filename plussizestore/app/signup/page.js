// import Image from 'next/image';
import Link from "next/link";
import styles from "../cssmodules/auth.module.css"

export default function SignUp() {
    return (
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <form>
              <h3>Sign Up</h3>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className={styles.formlabel}>First Name</label>
                <input type="text" className={styles.formcontrol} id="exampleFormControlInput1" placeholder="First name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className={styles.formlabel}>Last Name</label>
                <input type="text" className={styles.formcontrol} id="exampleFormControlInput2" placeholder="Last name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className={styles.formlabel}>Email Address</label>
                <input type="email" className={styles.formcontrol} id="exampleFormControlInput3" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput4" className={styles.formlabel}>Password</label>
                <input type="password" className={styles.formcontrol} id="exampleFormControlInput4" placeholder="Enter password" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput5" className={styles.formlabel}>Confirm Password</label>
                <input type="password" className={styles.formcontrol} id="exampleFormControlInput5" placeholder="Re-enter password" />
              </div>
              <div className="col-auto">
                <Link href="/login" type="submit" className="btn btn-primary loginbtn">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
    );
  }
  