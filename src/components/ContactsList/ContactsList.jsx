import React from "react"
import { Button, List, ListItem } from './ContactListStyled';

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

