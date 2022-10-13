import { Component } from "react";
import { nanoid } from 'nanoid';

import { Form } from "./Form/Form";

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  render() {
    return (
        <Form onSubmit={this.addContact} />
    )
  }
};
