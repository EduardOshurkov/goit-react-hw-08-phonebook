import React from "react";
import shortid from "shortid";
import { PhonebookFormLabel, PhonebookFormInput, ButtonForm } from "./PhonebookForm.style";



class Phonebook extends React.Component {
    state = {
        name: "",
        number: "",
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();
    
    handleNameChange = event => {
        this.setState({
        name: event.currentTarget.value,
        })
    };
  
    handleTelephoneChange = event => {
        this.setState({
        number: event.currentTarget.value,
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();
    };
    
   resetForm = () => {
    this.setState({ name: '', number: '' });
  };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <PhonebookFormLabel htmlFor={this.nameInputId}>
                    Contact
                    <PhonebookFormInput
                        type="text"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleNameChange}
                        id={this.nameInputId}
                    />
                </PhonebookFormLabel>
                <PhonebookFormLabel htmlFor={this.numberInputId}>
                    Telephone
                    <PhonebookFormInput
                        type="tel"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleTelephoneChange}
                        id={this.numberInputId}
                    />
                </PhonebookFormLabel>
                <ButtonForm type="submit">Add contact</ButtonForm>
            </form>
        );
    };
}


export default Phonebook;