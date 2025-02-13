import Link from "next/link";
import Image from "next/image";
import styles from "./cssmodules/pages.module.css";
// import logo from "/backgrndimages/Index/logo.png";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <Image src="/backgrndimages/Index/logo.png"
              alt="Logo" 
              width={150} 
              height={50} 
              className={styles.logo} 
            />
            <span className={styles.websiteName}>Plus Size Store</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={styles.navLink} href="#">Register</a>
              </li>
              <li className="nav-item">
                <a className={styles.navLink} href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className={styles.navLink} href="#">Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="d-flex align-items-center p-2">
        <div className="carousel-item">
          <Image 
            src="/backgrndimages/Hero1.png" 
            alt="Slide 1" 
            width={800} 
            height={400} 
            className={styles.hero} 
          />
        </div>
        <div>
          <p className={styles.textEnd}>
            Celebrate confidence and style with our plus-size women's store. Discover trendy,
            comfortable, and flattering fashion designed to empower every curve.
            Your perfect fit awaits – where beauty knows no size!
          </p>
          <div className="col-auto">
            <Link href='/signup' type="submit" className="btn btn-primary mb-3">Submit</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
