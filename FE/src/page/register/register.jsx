import { useState } from "react";
import styles from "./register.module.css";

function Register() {
    return (
        <section className={styles["content forms"]}>
            <div className={styles["form signup"]}>
                <div className={styles["form-content"]}>
                    <header>Signup</header>
                    <form action="#">
                        <div className={styles["field input-field"]}>
                            <input type="email" placeholder="Email" className={styles.input} />
                        </div>
                        <div className={styles["field input-field"]}>
                            <input type="password" placeholder="Create password" className={styles.password} />
                        </div>
                        <div className={styles["field input-field"]}>
                            <input type="password" placeholder="Confirm password" className={styles.password} />
                            <i className={`bx bx-hide ${styles["eye-icon"]}`}></i>
                        </div>
                        <div className={styles["field button-field"]}>
                            <button>Signup</button>
                        </div>
                    </form>
                    <div className={styles["form-link"]}>
                        <span>Already have an account? <a href="#" className={`${styles.link} ${styles["login-link"]}`}>Login</a></span>
                    </div>
                </div>
                <div className={styles["line"]}></div>
                <div className={styles["media-options"]}>
                    <a href="#" className={`${styles.field} ${styles.facebook}`}>
                        <i className={`bx bxl-facebook ${styles["facebook-icon"]}`}></i>
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
        </section>
    );
}

export default Register;