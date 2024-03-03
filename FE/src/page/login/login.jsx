import { useState } from "react";
import styles from "./login.module.css";

function Login() {
    return (
        <div>
        {/* <section className={styles.container}>
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
                           
                            <span>Login with Google</span>
                        </a>
                    </div>
                </div>
            </div>
        </section> */}

<section class="container forms">
            <div class="form login">
                <div class="form-content">
                    <header>Login</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input"/>
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Password" class="password"/>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>

                        <div class="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>

                        <div class="field button-field">
                            <button>Login</button>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Don't have an account? <a href="#" class="link signup-link">Signup</a></span>
                    </div>
                </div>

                <div class="line"></div>

                <div class="media-options">
                    <a href="#" class="field facebook">
                        <i class='bx bxl-facebook facebook-icon'></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>

                <div class="media-options">
                    <a href="#" class="field google">
                        
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>


            <div class="form signup">
                <div class="form-content">
                    <header>Signup</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input"/>
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Create password" class="password"/>
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Confirm password" class="password"/> 
                            <i class='bx bx-hide eye-icon'></i>
                        </div>

                        <div class="field button-field">
                            <button>Signup</button>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Already have an account? <a href="#" class="link login-link">Login</a></span>
                    </div>
                </div>

                <div class="line"></div>

                <div class="media-options">
                    <a href="#" class="field facebook">
                        <i class='bx bxl-facebook facebook-icon'></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>

                <div class="media-options">
                    <a href="#" class="field google">
                        
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>
        </section>
        </div>
    );
}

export default Login;