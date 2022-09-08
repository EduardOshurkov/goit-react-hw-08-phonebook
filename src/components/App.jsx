

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

  // const getFilter = ({ items, filter }) => {
  //  if (filter) {
  //     const subString = filter.toLocaleUpperCase();
  //     const key = isNaN(+filter.charAt(0)) ? 'name' : 'number'
  //     return items.filter(el => el[key].toLocaleUpperCase().includes(subString));
  //   } else {
  //     return items;
  //   }
  // }
  

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