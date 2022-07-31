import React from "react";

const PhonebookList = ({ listToComplited, onDeleteContact }) => {
    console.log(listToComplited)
    return (
        <div>
        <ul>
                {listToComplited.map(({id, name, number}) => (
                    <li key={id}>
            <span>
                {name};
            </span>
            <span>
                {number}
            </span>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>))}
            </ul>
        </div>
    )
}

export default PhonebookList;