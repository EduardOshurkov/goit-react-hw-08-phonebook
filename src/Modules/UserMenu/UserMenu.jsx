import { useSelector, useDispatch } from "react-redux";
import { getUser } from "Redux/auth/auth-selectors";
import { logout } from "Redux/auth/auth-operations";



const UserMenu = () => {
    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => dispatch(logout());
    
    return (
        <div>
            <span>{name}</span>
            <button type="button" onClick={onLogout}>Logout</button>
        </div>
    )
};

export default UserMenu;