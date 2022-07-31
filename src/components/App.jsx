import React from "react";
import shortid from "shortid";
import Phonebook from "./Phonebook/Phonebook";
import PhonebookList from "./Phonebook/PhonebookList";


export class App extends React.Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
  };

  
  formSubmitHandler = data => {
    const addContact = {
      id: shortid.generate(),
      ...data
    }
    this.setState(prevState => {
      return {contacts: [...prevState.contacts, addContact]}
    })
  }

  listToComplited = () => {
   return this.state.contacts
  }
  


  render() {
    return (
      <div>
      <Phonebook onSubmit={this.formSubmitHandler} />
        <PhonebookList listToComplited={this.listToComplited()}/>
        </div>
    )
  }
}