import { useSelector, useDispatch } from "react-redux";
import { getUser } from "Redux/auth/auth-selectors";
import { logout } from "Redux/auth/auth-operations";
import style from "./UserMenu.module.css"



const UserMenu = () => {
    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => dispatch(logout());
    
    return (
        <div className={style.userWrap}>
            <span className={style.userName}>{name}</span>
            <button type="button" onClick={onLogout} className={style.logoutBtn}>Logout</button>
        </div>
    )
};

export default UserMenu;