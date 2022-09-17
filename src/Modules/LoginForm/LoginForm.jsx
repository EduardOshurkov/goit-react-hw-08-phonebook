import { initialState } from "../LoginForm/InitialState";
import useForm from "hooks/useForm";

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

    const { email, password } = state;

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input value={email} name="email" onChange={handleChange} type="email" placeholder="Email" required />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input value={password} name="password" onChange={handleChange} type="password" placeholder="Email" required />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    )
};

export default LoginForm;