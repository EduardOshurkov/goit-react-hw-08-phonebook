import {useState} from "react";
import shortid from "shortid";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import PhonebookList from "./PhonebookList/PhonebookList";
import Filter from "./Filter/Filter";
import styled from '@emotion/styled';
import { useLocaleStorage } from "hooks/hooks";


export function App() {
  const [contacts, setContacts] = useLocaleStorage('contacts', []);
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

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
    
  // }, [contacts])
    
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