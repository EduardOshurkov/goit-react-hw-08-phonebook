import { NavLink } from "react-router-dom";
import style from "./NavbarMenu.module.css"


const NavbarMenu = () => {
    return (
        <div>
            <NavLink to='/contacts' className={style.contactTitle}>Contacts</NavLink>
        </div>
    )
};

export default NavbarMenu;