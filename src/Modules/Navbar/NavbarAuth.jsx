import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css"


const NavbarAuth = () => {
    return (
        <div>
            <NavLink to='/register' className={style.registerTitle}>Register</NavLink>
    
            <NavLink to='/login' className={style.loginTitle}>Login</NavLink>
        </div>
    )
};

export default NavbarAuth;