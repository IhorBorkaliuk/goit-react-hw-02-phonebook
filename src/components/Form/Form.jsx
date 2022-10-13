import { Component } from "react";
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class Form extends Component {
  state = { ...INITIAL_STATE };
  IDName = nanoid();
  IDnumber = nanoid();
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
      const { name, number } = this.state;
      console.log(name, number);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.state });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            id={this.nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number
          <input
            id={this.IDNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}