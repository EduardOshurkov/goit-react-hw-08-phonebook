

import Phonebook from "./PhonebookForm/PhonebookForm";
import PhonebookList from "./PhonebookList/PhonebookList";
import Filter from "./Filter/Filter";
import styled from '@emotion/styled';
// import { useLocaleStorage } from "hooks/hooks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addContacts, removeContacts, setFilter } from "Redux/actions";


export function App() {
  const contacts = useSelector(store => store.items);
  
  const filter = useSelector(store => store.filter);

  const getFilter = ({ items, filter }) => {
   if (filter) {
      const subString = filter.toLocaleUpperCase();
      const key = isNaN(+filter.charAt(0)) ? 'name' : 'number'
      return items.filter(el => el[key].toLocaleUpperCase().includes(subString));
    } else {
      return items;
    }
  }
  

  const dispatch = useDispatch();

  const onAddContacts = (payload) => {
    const action = addContacts(payload)
    dispatch (action);

  };

  const onRemoveContacts = (payload) => {
    dispatch(removeContacts(payload));
  }

  const onSetFilter = ({target}) => {
    console.log(target);
    dispatch(setFilter(target.value))
  }


//   const [contacts, setContacts] = useLocaleStorage('contacts', []);
//   const [filter, setFilter] = useState('');
  
//   const formSubmitHandler = (name, number) => {
//     const addContact = {id: shortid.generate(), name, number}

//      const isFindCopyContact = contacts.find(
//       el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
//     );

//     if (isFindCopyContact) {
//       return alert(`${name} is already in your contacts`);
//     };

//     setContacts([...contacts, addContact])

  
//   }

//   const filterContact = () => {

//     if (filter) {
//       const subString = filter.toLocaleUpperCase();
//       const key = isNaN(+filter.charAt(0)) ? 'name' : 'number'
//       return contacts.filter(el => el[key].toLocaleUpperCase().includes(subString));
//     } else {
//       return contacts;
//     }
//   }
  
// const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };
  

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId))
//   };


    
    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <Phonebook onSubmit={onAddContacts} />

        <TitlePhonebook>Contacts</TitlePhonebook>
        <Filter onChange={onSetFilter} value={filter} />

        <PhonebookList contacts={contacts} DeleteContact={onRemoveContacts}/>
        
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