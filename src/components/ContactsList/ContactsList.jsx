import React from "react"

export function ContactList({ data, deleteFromContacts }) {
  const items = data.map(({ name, number, id }) => {
    return (
      <li key={id}>
        Name: {name} Number: {number}
        <button type="button" onClick={() => deleteFromContacts(name)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{items}</ul>;
}

