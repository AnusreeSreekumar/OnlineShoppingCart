"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../cssmodules/auth.module.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log('input data: ',formData);
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      console.log("Sending data:", formData);

      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password,
        }),
      });

      console.log("Raw response:", response); 

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
    }

      const data = await response.json();
      console.log('db output: ', data);
      

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      alert("User registered successfully!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <form>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <input
              type="text"
              name="firstname"
              className={styles.formcontrol}
              placeholder="First name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="lastname"
              className={styles.formcontrol}
              placeholder="Last name"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className={styles.formcontrol}
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className={styles.formcontrol}
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"
              className={styles.formcontrol}
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <div className="col-auto">
            <Link href="#" type="submit" className={styles.loginbtn}>
              Sign Up
            </Link>
          </div>
          <p style={{marginLeft: '60px', marginTop: '20px'}}>Already have an account? <Link href="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
}
