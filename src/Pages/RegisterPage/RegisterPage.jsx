import RegisterForm from "Modules/RegisterForm/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signup } from "Redux/auth/auth-operations";
import { getAuthError } from "Redux/auth/auth-selectors";
import { isAuth } from "Redux/auth/auth-selectors";


const RegisterPage = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(getAuthError);
    const isLogin = useSelector(isAuth);
    console.log(isLogin);

    const onRegister = (data) => {
        dispatch(signup(data));
    };

    if (isLogin) {
        return <Navigate to="/contacts"/>
    }

    return (
        <div>
            <RegisterForm onSubmit={onRegister} />
            {status && <p>Error</p>}
        </div>
    )
};

export default RegisterPage;