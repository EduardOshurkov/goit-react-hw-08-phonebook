import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div>
            <h2 className={styles.homeTitle}>Hello!</h2>
            <h3 className={styles.homeText}>To create your contact list, you need to <NavLink to='/login' className={styles.link}>Login</NavLink> or <NavLink to='/register' className={styles.link}>Register</NavLink></h3>
        </div>
    )
};

export default HomePage;