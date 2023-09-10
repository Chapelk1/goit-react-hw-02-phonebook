import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Form,
  Label,
  Wrap,
  Input,
  Btn,
} from 'components/ContactForm/ContactForm.styled';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputValueHandler = e => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    this.setState({
      [inputName]: inputValue,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Wrap>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.inputValueHandler}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.inputValueHandler}
            />
          </Label>
        </Wrap>
        <Btn type="submit">Add contact</Btn>
      </Form>
    );
  }
}



ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.object,
}