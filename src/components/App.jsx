import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';



const commonContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]

export class App extends Component {
  state = {
    contacts: commonContacts,
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
    this.state.contacts.find(el => el.name === name);

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFilter = () => {
    const { contacts, filter } = this.state;

    if (!filter) return contacts;

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
        <Title>Contacts</Title>
        <ContactList
          data={this.onFilter()}
          deleteFromContacts={deleteFromContacts}
        />
        <Filter handleChange={handleChange} value={filter} />
      </div>
    );
  }
}


Notiflix.Notify.init({
  position: 'center-top',
  timeout: 2000,
  clickToClose: true,
});