import { Link } from "react-router-dom";
import UserMenu from "Modules/UserMenu/UserMenu";
import useAuth from "hooks/useAuth";
import NavbarAuth from "./NavbarAuth";
import NavbarMenu from "Modules/NavbarMenu/NavbarMenu";


const Navbar = () => {
    const isLogin = useAuth();
    

    return (
        <div>
            <Link to="/">LOGO</Link>
            {isLogin && <NavbarAuth />}
            {isLogin ? <UserMenu /> : <NavbarMenu />}
            {/* <UserMenu/> */}
        </div>
    )
};

export default Navbar;