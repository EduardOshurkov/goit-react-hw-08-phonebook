import { initialState } from "./initialstate";
import useForm from "hooks/useForm";
import styles from "./RegisterForm.module.css"

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

    const { name, email, password } = state;

    return (
        <div className={styles.RegisterForm}>
            <form className={styles.form} action="" onSubmit={handleSubmit}>
                <h2 className={styles.title}>Register</h2>
                <div className={styles.wrapForm}>
            <div className={styles.nameForm}>
                <label className={styles.label} htmlFor="">Name</label>
                <input className={styles.registerInput} value={name} name="name" onChange={handleChange} type="text" placeholder="name user" required />
            </div>
            <div className={styles.mailForm}>
                <label className={styles.label} htmlFor="">Email</label>
                <input className={styles.registerInput} value={email} name="email" onChange={handleChange} type="email" placeholder="email" required />
            </div>
            <div className={styles.passwordForm}>
                <label className={styles.label} htmlFor="">Password</label>
                <input className={styles.registerInput} value={password} name="password" onChange={handleChange} type="password" placeholder="password" required />
            </div>
                <button className={styles.registerBtn} type="submit">Register</button>    
                </div>
            </form>
            </div>
    )
};

export default RegisterForm;