import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormTitle, Button, Input } from './ContactForm.styled';

export class ContactForm extends Component {
    static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
    contact: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ).isRequired,
  };
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { contacts } = this.props;
        const { name } = this.state;
     if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is is already in contacts.`);
    } else {
      this.props.onSubmit(this.state);
      this.reset();
    }
    };
   
    reset = () => {
    this.setState({ name: '', number: '' });
  };

    render() {
      
        const { name, number } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormTitle>Name</FormTitle>
                <Input
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={this.handleChange}
          
                    required />
                <FormTitle>Number</FormTitle>
                <Input
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={this.handleChange}
                    required />
                <Button type="submit">
                    Add contact
                </Button>
            </Form>
        );
    }
}