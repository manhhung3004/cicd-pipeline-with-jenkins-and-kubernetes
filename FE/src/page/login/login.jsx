import React, { useState } from "react";
import styles from "./login.module.css";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", {
                email: email,
                password: password
            });
            // Xử lý phản hồi từ server (ví dụ: chuyển hướng, hiển thị thông báo thành công)
            console.log(response.data);
            if (response.status === 200) {
                // Chuyển hướng người dùng đến trang home
                window.location.href = "/"; // Thay đổi đường dẫn tùy theo cấu trúc của ứng dụng của bạn
            } else {
                // Xử lý khi đăng nhập không thành công (nếu cần)
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("Invalid email or password");
        }
    };
    return (
        <div>
            <section className={styles.container}>
                <div className={styles.forms}>
                    <div className={styles.login}>
                        <div className={styles["form-content"]}>
                            <header>Login</header>
                            <form onSubmit={handleSubmit}>
                                <div className={styles["field input-field"]}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className={styles.input}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className={styles["field input-field"]}>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={styles.password}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <i
                                        className={`${styles["bx bx-hide"]} ${styles["eye-icon"]}`}
                                    ></i>
                                </div>
                                {error && <div className={styles.error}>{error}</div>}
                                <div className={styles["form-link"]}>
                                    <button type="submit">Login</button>
                                </div>
                            </form>
                            <div className={styles["form-link"]}>
                                <span>
                                    Don't have an account?{" "}
                                    <a
                                        href="Register"
                                        className={`${styles.link} ${styles["signup-link"]}`}
                                    >
                                        Signup
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
