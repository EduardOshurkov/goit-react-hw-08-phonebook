import {useState, useEffect} from "react";
import shortid from "shortid";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import PhonebookList from "./PhonebookList/PhonebookList";
import Filter from "./Filter/Filter";
import styled from '@emotion/styled';


export function App() {
  const [contacts, setContacts] = useState([{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
  
  const [filter, setFilter] = useState('');
  
  const formSubmitHandler = (name, number) => {
    const addContact = {id: shortid.generate(), name, number}

     const isFindCopyContact = contacts.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isFindCopyContact) {
      return alert(`${name} is already in your contacts`);
    };

    setContacts([...contacts, addContact])

  
  }

  const filterContact = () => {

    if (filter) {
      const subString = filter.toLocaleUpperCase();
      const key = isNaN(+filter.charAt(0)) ? 'name' : 'number'
      return contacts.filter(el => el[key].toLocaleUpperCase().includes(subString));
    } else {
      return contacts;
    }
  }
  
const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  };

  useEffect(() => {
 if (!contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  })
    
    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <PhonebookForm onSubmit={formSubmitHandler} />

        <TitlePhonebook>Contacts</TitlePhonebook>
        <Filter value={filter} onChange={changeFilter}/>

        <PhonebookList listToComplited={filterContact()} DeleteContact={deleteContact} />
        
        </Container>
    )
  
}


const Container = styled.div`
    text-align: center;
    padding: 40px;
`;

const TitlePhonebook = styled.h2`
font-family: Kdam Thmor Pro;
font-size: 24px;
`