import { initialState } from "../LoginForm/InitialState";
import useForm from "hooks/useForm";
import styles from "./LoginForm.module.css"

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

    const { email, password } = state;

    return (
        <div className={styles.loginForm}>
            
            <form className={styles.form} action="" onSubmit={handleSubmit}>
                <h2 className={styles.title}>Login</h2>
                <div className={styles.wrapForm}>
                    <div className={styles.mailForm}>
                        <label htmlFor="" className={styles.label}>Email</label>
                        <input className={styles.loginInput} value={email} name="email" onChange={handleChange} type="email" placeholder="email" required />
                    </div>
                    <div className={styles.passwordForm}>
                        <label htmlFor="" className={styles.label}>Password</label>
                        <input className={styles.loginInput} value={password} name="password" onChange={handleChange} type="password" placeholder="password" required />
                    </div>
                    <button className={styles.loginBtn} type="submit">Login</button>
                </div>
            </form>
        </div>
    )
};

export default LoginForm;