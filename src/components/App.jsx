import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    this.hasAlreadyAdded(contact)
      ? Notiflix.Notify.info(`${contact.name} is already in contacts`)
      : this.setState(prev => {
          const newContact = {
            id: nanoid(),
            ...contact,
          };
          return {
            contacts: [...prev.contacts, newContact],
          };
        });
  };

  hasAlreadyAdded = ({ name }) =>
    this.state.contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFilter = () => {
    const { contacts, filter } = this.state;

    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
  };

  deleteFromContacts = name => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts].filter(contact => contact.name !== name),
      };
    });
  };

  render() {
    const { handleChange, addContact, deleteFromContacts } = this;
    const { filter } = this.state;
    return (
      <div>
        <Title>Phonebook</Title>
        <Form onSubmit={addContact} />
        {this.state.contacts.length >= 1 ? (
          <>
            <Title>Contacts</Title>
            <ContactList
              data={this.onFilter()}
              deleteFromContacts={deleteFromContacts}
            />
            <Filter handleChange={handleChange} value={filter} />
          </>
        ) : (
          ''
        )}
      </div>
    );
  }
}


Notiflix.Notify.init({
  position: 'center-top',
  timeout: 2000,
  clickToClose: true,
});