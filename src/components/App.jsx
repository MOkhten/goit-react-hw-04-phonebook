import { nanoid } from 'nanoid';
import { useState } from "react";
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Phonebook } from './App.styled';


export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

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




//    visibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalized = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
//   };

//   componentDidMount() {
//     console.log(' App componentDidMount');
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//   }
//     }
    

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { contacts, filter } = this.state;
//     return (
//      
//     );
//     }
// }