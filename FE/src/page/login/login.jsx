import { useState } from "react";
import styles from "./login.module.css";

function Login() {
    return (
        <section className={styles.container}>
            <div className={styles.forms}>
                <div className={styles.login}>
                    <div className={styles["form-content"]}>
                        <header>Login</header>
                        <form action="#">
                            <div className={styles["field input-field"]}>
                                <input type="email" placeholder="Email" className={styles.input} />
                            </div>
                            <div className={styles["field input-field"]}>
                                <input type="password" placeholder="Password" className={styles.password} />
                                <i className={`${styles["bx bx-hide"]} ${styles["eye-icon"]}`}></i>
                            </div>
                            <div className={styles["form-link"]}>
                                <a href="#" className={styles["forgot-pass"]}>Forgot password?</a>
                            </div>
                            <div className={styles["field button-field"]}>
                                <button>Login</button>
                            </div>
                        </form>
                        <div className={styles["form-link"]}>
                            <span>Don't have an account? <a href="Register" className={`${styles.link} ${styles["signup-link"]}`}>Signup</a></span>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles["media-options"]}>
                        <a href="#" className={`${styles.field} ${styles.facebook}`}>
                            <i className={`${styles["bx bxl-facebook"]} ${styles["facebook-icon"]}`}></i>
                            <span>Login with Facebook</span>
                        </a>
                    </div>
                    <div className={styles["media-options"]}>
                        <a href="#" className={`${styles.field} ${styles.google}`}>
                            {/* <img src="#" alt="" className={styles["google-img"]} /> */}
                            <span>Login with Google</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;