import { Component } from 'react';
import { ButtonForm } from './FormStyled';
import { FormStyled, Text, Label, Input } from './FormStyled';


export class Form extends Component {
  state = { name: '', number: '' };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state );
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <Label>
          <Text>Name</Text>
          <Input
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>

        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormStyled>
    );
  }
}
