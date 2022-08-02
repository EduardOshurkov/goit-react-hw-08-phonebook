import React from "react";
import shortid from "shortid";
import Phonebook from "./Phonebook/Phonebook";
import PhonebookList from "./Phonebook/PhonebookList";
import Filter from "./Phonebook/Filter";


export class App extends React.Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  };

  
  formSubmitHandler = data => {
    const addContact = {
      id: shortid.generate(),
      ...data
    }
    this.setState(prevState => {
      return {contacts: [...prevState.contacts, addContact]}
    })

    const isFindCopyContact = this.state.contacts.find(
      el => el.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );

    if (isFindCopyContact) {
      return alert(`${data.name} is in your Contacts`);
    };
  }

  listToComplited = () => {
    const { contacts, filter } = this.state

    if (filter) {
      const subString = filter.toLocaleUpperCase();
      const key = isNaN(+filter.charAt(0)) ? 'name' : 'number'
      return contacts.filter(el => el[key].toLocaleUpperCase().includes(subString));
    } else {
      return contacts;
    }
  }
  
changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    
    return (
      <div>
        <Phonebook onSubmit={this.formSubmitHandler} />

        <Filter value={filter} onChange={this.changeFilter}/>

        <PhonebookList listToComplited={this.listToComplited()} onDeleteContact={this.deleteContact} />
        
        </div>
    )
  }
}