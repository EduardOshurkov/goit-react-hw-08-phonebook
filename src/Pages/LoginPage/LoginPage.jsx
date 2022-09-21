import LoginForm from "Modules/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "Redux/auth/auth-operations";
import { getAuthError } from "Redux/auth/auth-selectors";
import useAuth from "hooks/useAuth";

const LoginPage = () => {
     const dispatch = useDispatch();
    const { status } = useSelector(getAuthError);
    const isLogin = useAuth();
  

    const onLogin = (data) => {
        dispatch(login(data));
    };

    if (isLogin) {
        return <Navigate to="/contacts"/>
    }

    return (
        <div>
            <LoginForm onSubmit={onLogin} />
            {status && <p>Error</p>}
        </div>
    )
};

export default LoginPage;