import { Link } from "react-router-dom";
import NavbarAuth from "./NavbarAuth";
import NavbarMenu from "Modules/NavbarMenu/NavbarMenu";


const Navbar = () => {
    return (
        <div>
            <Link to="/">LOGO</Link>
            <NavbarAuth />
            <NavbarMenu/>
        </div>
    )
};

export default Navbar;