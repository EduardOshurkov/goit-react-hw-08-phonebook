import React from "react";
import PropTypes from 'prop-types';
import { Button, InfoContact, ContactList } from "./PhonebookList.styled";

const PhonebookList = ({ listToComplited, DeleteContact }) => {
    return (
        <div>
        <ContactList>
                {listToComplited.map(({id, name, number}) => (
                    <li key={id}>
            <InfoContact>{name}: </InfoContact>
            <InfoContact>{number}</InfoContact>
            <Button type="button" onClick={() => DeleteContact(id)}>Delete</Button>
        </li>))}
            </ContactList>
        </div>
    )
}

export default PhonebookList;

PhonebookList.propTypes = {
    listToComplited: PropTypes.array.isRequired,
    DeleteContact: PropTypes.func.isRequired,
}