import { useSelector } from "react-redux";
import { isAuth } from "Redux/auth/auth-selectors";


const useAuth = () => {
    const result = useSelector(isAuth);
    return result;
};

export default useAuth;