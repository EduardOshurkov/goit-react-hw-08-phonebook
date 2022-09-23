import { NavLink } from "react-router-dom";
import UserMenu from "Modules/UserMenu/UserMenu";
import useAuth from "hooks/useAuth";
// import NavbarAuth from "./NavbarAuth";
import NavbarMenu from "Modules/NavbarMenu/NavbarMenu";
import styles from "./Navbar.module.css";
// import HomePage from "Pages/HomePage/HomePage";


const Navbar = () => {
    const isLogin = useAuth();


    return (
        <div className={styles.headerMenu}>
            <NavLink to="/" className={styles.homeTitle}>Home</NavLink>
            {isLogin && <NavbarMenu />}
            {isLogin && <UserMenu />}
        </div>
    )
};

export default Navbar;