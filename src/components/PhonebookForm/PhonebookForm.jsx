import {useState} from "react";
import shortid from "shortid";
import { PhonebookFormLabel, PhonebookFormInput, ButtonForm } from "./PhonebookForm.style";



export default function Phonebook({ onSubmit }) {
    const initialState = {
        name: '',
        number: '',
    };

    const [state, setState] = useState({ ...initialState });
    const { name, number } = state;
   

    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();
    
    const handleChange = ({target}) => {
        const { name, value } = target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ ...state });
        setState({ ...initialState });
    };
    
    
        return (
            <form onSubmit={handleSubmit}>
                <PhonebookFormLabel htmlFor={nameInputId}>
                    Contact
                    <PhonebookFormInput
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        id={nameInputId}
                    />
                </PhonebookFormLabel>
                <PhonebookFormLabel htmlFor={numberInputId}>
                    Telephone
                    <PhonebookFormInput
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        id={numberInputId}
                    />
                </PhonebookFormLabel>
                <ButtonForm type="submit">Add contact</ButtonForm>
            </form>
        );
}

