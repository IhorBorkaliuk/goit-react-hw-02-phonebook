import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListItem } from './ContactsListStyled';

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


ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

