import React, { Component } from "react";
import shortid from 'shortid';
import {ContactList} from 'components/ContactList/ContactList'
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from 'components/Filter/Filter'
import { Section, Title, SecondTitle,  } from 'components/App/App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filtered = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  addContact = ({ name, number }) => {
    const contactExists = this.state.contacts.some(contact => contact.name === name)
    if (contactExists) {
      return alert(`${name} is already in contacts.`)
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    };

    getVisibleContact = () => {
        const normalizedFilter = this.state.filter.toLowerCase()
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    }

    render() {
      const visibleContacts = this.getVisibleContact()
    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} contacts={this.state} />
        
        <SecondTitle>Contacts</SecondTitle>
        <Filter value={this.state.filter} onChange={this.filtered} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}
