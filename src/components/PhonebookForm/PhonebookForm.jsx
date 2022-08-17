import {useState} from "react";
import shortid from "shortid";
import { PhonebookFormLabel, PhonebookFormInput, ButtonForm } from "./PhonebookForm.style";



export default function Phonebook({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
   

    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();
    
    const handleNameChange = event => {
        setName(event.currentTarget.value)
    };
  
    const handleTelephoneChange = event => {
        setNumber(event.currentTarget.value)
    };


    
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(name, number);
        resetForm();
    };
    
   const resetForm = () => {
       setName('');
       setNumber('');
  };


        return (
            <form onSubmit={handleSubmit}>
                <PhonebookFormLabel htmlFor={nameInputId}>
                    Contact
                    <PhonebookFormInput
                        type="text"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleNameChange}
                        id={nameInputId}
                    />
                </PhonebookFormLabel>
                <PhonebookFormLabel htmlFor={numberInputId}>
                    Telephone
                    <PhonebookFormInput
                        type="tel"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleTelephoneChange}
                        id={numberInputId}
                    />
                </PhonebookFormLabel>
                <ButtonForm type="submit">Add contact</ButtonForm>
            </form>
        );
}

