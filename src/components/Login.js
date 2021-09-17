import React from "react";
import Link from "next/link";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const loginUser = () => {};
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logo}>PDFBOX</div>
        <div className={styles.loginFormWrapper}>
          <div className={styles.loginForm}>
            <form onSubmit={loginUser}>
              <div className={styles.inputDiv}>
                <label htmlFor="name">Username</label>
                <div className={styles.theInput}>
                  <i className={`${styles.icon} ${styles.iconUsr}`}></i>
                  <input
                    className={styles.username}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Username"
                    autoComplete="username"
                    required
                  />
                </div>
              </div>
              <div className={styles.inputDiv}>
                <label htmlFor="pwd">Password</label>
                <div className={styles.theInput}>
                  <i className={`${styles.icon} ${styles.iconPwd}`}></i>
                  <input
                    className={styles.password}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Your Password"
                    autoComplete="password"
                    required
                  />
                </div>
              </div>
              <Link href="/dashboard">
                <button type="submit" className={styles.button}>
                  LOGIN
                </button>
              </Link>
            </form>
          </div>
          <p className={styles.forgotPassword}>Forgot password?</p>
          <div className={styles.formFooterWrapper}>
            <div className={styles.formFooter}>
              <p>Objective Corporation</p>
              <p>Terms of service</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Login;
