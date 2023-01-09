import { nanoid } from 'nanoid';
import { Component } from "react";
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Phonebook } from './App.styled';

export class App  extends Component {
    state = {
  contacts: [ ],
  filter: '',
};
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };


  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts, filter }) => ({
      contacts: [newContact, ...contacts],
      
    }));
    console.log(this.state);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


   visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalized = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  componentDidMount() {
    console.log(' App componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
  }
    }
    

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    return (
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={contacts}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange = {this.changeFilter} />
        <ContactList
          contacts={this.visibleContacts()}
        onDeleteContact={this.deleteContact}/>
     </Phonebook>
    );
      
    }
}