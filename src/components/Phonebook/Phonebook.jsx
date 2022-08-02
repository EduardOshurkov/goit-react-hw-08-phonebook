import React from "react";
import shortid from "shortid";



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
        this.reset();
    };
    
    reset = () => {
        this.setState({
            name: "",
            number: "",
        })
    };

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                    Contact
                    <input
                        type="text"
                        name={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleNameChange}
                        id={this.nameInputId}
                    />
                </label>
                <label htmlFor={this.numberInputId}>
                    Telephone
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleTelephoneChange}
                        id={this.numberInputId}
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    };
}


export default Phonebook;