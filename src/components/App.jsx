import Phonebook from "./PhonebookForm/PhonebookForm";
import PhonebookList from "./PhonebookList/PhonebookList";
import styled from '@emotion/styled';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "Redux/filterSlice";
import { getVisibleFilter, getFilter } from "Redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "Redux/contacts-operations";
import { addContact, removeContact } from "Redux/contacts-operations";


export function App() {
  const contacts = useSelector(getVisibleFilter);
  const filter = useSelector(getFilter);
  console.log(contacts);
  

   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContacts = (payload) => {
   const action = addContact(payload)
    dispatch (action);
  };

  const onRemoveContacts = (payload) => {
    dispatch(removeContact(payload));
  }

  const onSetFilter = ({target}) => {
    dispatch(setFilter(target.value))
  }
    
    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <Phonebook onSubmit={onAddContacts} />

        <TitlePhonebook>Contacts</TitlePhonebook>
        {/* <Filter onChangeFilter={onSetFilter}  /> */}

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