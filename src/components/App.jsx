import React from "react";
import { nanoid } from "nanoid";
import Phonebook from "./Phonebook/Phonebook";

export class App extends React.Component {
  state = {
  contacts: []
}


  
  formSubmitHandler = data => {
    const { contacts } = this.state;

    const addContact = {
      id: nanoid(5),
      ...data,
    };
    this.setState({ contacts: [...contacts, addContact] });

  }

  render() {
    return (
       <div>
        <Phonebook onSubmit={this.formSubmitHandler} />
       
    </div>
    )
  }
}




