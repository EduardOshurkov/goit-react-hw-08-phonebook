import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleFilter } from "Redux/selectors";
import { removeContact } from "Redux/contacts-operations";
import { useEffect } from "react";
import { fetchContacts } from "Redux/contacts-operations";
import { Button, InfoContact, ContactList } from "./PhonebookList.styled";

const PhonebookList = () => {
        const contacts = useSelector(getVisibleFilter);
    const dispatch = useDispatch();
    
     useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    const onRemoveContacts = (payload) => {
    dispatch(removeContact(payload));
    }
    
    return (
        <div>
        <ContactList>
                {contacts.map(({id, name, number}) => (
                    <li key={id}>
            <InfoContact>{name}: </InfoContact>
            <InfoContact>{number}</InfoContact>
            <Button type="button" onClick={() => onRemoveContacts(id)}>Delete</Button>
        </li>))}
            </ContactList>
        </div>
    )
}

export default PhonebookList;

