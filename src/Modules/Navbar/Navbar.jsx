import { NavLink } from "react-router-dom";
import UserMenu from "Modules/UserMenu/UserMenu";
import useAuth from "hooks/useAuth";
import NavbarAuth from "./NavbarAuth";
import NavbarMenu from "Modules/NavbarMenu/NavbarMenu";
import style from "./Navbar.module.css"


const Navbar = () => {
    const isLogin = useAuth();
    

    return (
        <div className={style.headerMenu}>
            <NavLink to="/" className={style.home}>Home</NavLink>
            {isLogin && <NavbarMenu />}
            {isLogin ? <UserMenu /> : <NavbarAuth />}
        </div>
    )
};

export default Navbar;