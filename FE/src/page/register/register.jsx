// register.jsx

import { useState } from "react";
import styles from "./register.module.css";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className={styles.container}>
            <section className={styles.forms}>
                <div className={styles.register}>
                    <div className={styles["form-content"]}>
                        <header>Signup</header>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.field}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className={styles.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="password"
                                    placeholder="Create password"
                                    className={styles.password}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className={styles.password}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className={styles.input}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className={styles.input}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className={styles.input}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className={styles.input}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            {error && <div className={styles.error}>{error}</div>}
                            <div className={styles.field}>
                                <button type="submit">Signup</button>
                            </div>
                        </form>
                        <div className={styles["form-link"]}>
                            <span>Already have an account? <a href="/login" className={`${styles.link} ${styles["login-link"]}`}>Login</a></span>
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
                            <span>Login with Google</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
