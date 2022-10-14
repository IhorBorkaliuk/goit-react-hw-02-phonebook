import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button } from 'components/ContactsList/ContactsListStyled';
import { FormStyled, Text, Label, Input } from './FormStyled';


export class Form extends Component {
  state = { name: '', number: '' };
  IDName = nanoid();
  IDnumber = nanoid();
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.state });
  };

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <Label>
          <Text>Name</Text>
          <Input
            id={this.nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>

        <Label>
          <Text>Number</Text>
          <Input
            id={this.IDNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormStyled>
    );
  }
}
