<<<<<<< HEAD
import React from 'react';
import { Button, List, ListItem } from './ContactsListStyled';
=======
import React from "react"
import { Button, List, ListItem } from './ContactListStyled';
>>>>>>> 208b35d538c69678c0ef148a2444ea1d656cf742

export function ContactList({ data, deleteFromContacts }) {
  const items = data.map(({ name, number, id }) => {
    return (
      <ListItem key={id}>
        Name: {name} Number: {number}
        <Button type="button" onClick={() => deleteFromContacts(name)}>
          Delete
        </Button>
      </ListItem>
    );
  });
  return <List>{items}</List>;
}
<<<<<<< HEAD
=======

>>>>>>> 208b35d538c69678c0ef148a2444ea1d656cf742