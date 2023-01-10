import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormTitle, Button, Input } from './ContactForm.styled';


export function ContactForm({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        throw new Error('Unexpected type of field');
    }
  };

  const handleSubmit = e => {
        e.preventDefault();
     if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is is already in contacts.`);
    } else {
      onSubmit({name, number});
      reset();
    }
  };
  
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmit}>
                 <FormTitle>Name</FormTitle>
                 <Input
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handleChange}
          
                    required />
                <FormTitle>Number</FormTitle>
                <Input
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={handleChange}
                    required />
                <Button type="submit">
                    Add contact
                </Button>
            </Form>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};
    

