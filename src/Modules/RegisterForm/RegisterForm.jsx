import { initialState } from "./initialstate";
import useForm from "hooks/useForm";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

    const { name, email, password } = state;

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input value={name} name="name" onChange={handleChange} type="text" placeholder="Name user" required />
            </div>
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

export default RegisterForm;