import React from "react";
import { nanoid } from "nanoid";



class Phonebook extends React.Component {
    state = {
    contacts: [],
    name: ''
    }
    
    ContactName = event => {
        this.setState({ name: event.target.value })
    };

    AddContact = event => {
        event.preventDefault();
        console.log(this.state.name);
        this.props.onSubmit({...this.state})
    }



    render() {
        return (
            <>
                <form onSubmit={this.AddContact}>
                    <label>
            <input
                type="text"
                name={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.ContactName}
                        />
                        </label>
                <button type="submit">Add contact</button>
                </form>
                </>
        )
}
}


export default Phonebook;