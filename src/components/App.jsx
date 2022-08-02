import React from "react";
import shortid from "shortid";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import PhonebookList from "./PhonebookList/PhonebookList";
import Filter from "./Filter/Filter";
import styled from '@emotion/styled';


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

     const isFindCopyContact = this.state.contacts.find(
      el => el.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );

    if (isFindCopyContact) {
      return alert(`${data.name} is already in your contacts`);
    };

    this.setState(prevState => {
      return {contacts: [...prevState.contacts, addContact]}
    })

  
  }

  filterContact = () => {
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
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <PhonebookForm onSubmit={this.formSubmitHandler} />

        <TitlePhonebook>Contacts</TitlePhonebook>
        <Filter value={filter} onChange={this.changeFilter}/>

        <PhonebookList listToComplited={this.filterContact()} DeleteContact={this.deleteContact} />
        
        </Container>
    )
  }
}


const Container = styled.div`
    text-align: center;
    padding: 40px;
`;

const TitlePhonebook = styled.h2`
font-family: Kdam Thmor Pro;
font-size: 24px;
`