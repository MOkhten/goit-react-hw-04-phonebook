import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Phonebook } from './App.styled';


export function App() {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [newContact, ...prevContacts ])
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
  return (
     <Phonebook>
       <h1>Phonebook</h1>
       <ContactForm onSubmit={addContact} contacts={contacts}/>
       <h2>Contacts</h2>
       <Filter value={filter} onChange = {changeFilter} />
     <ContactList
         contacts={visibleContacts()}
      onDeleteContact={deleteContact}/>
  </Phonebook>
  )

}
