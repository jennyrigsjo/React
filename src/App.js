import 'bootstrap/dist/css/bootstrap.min.css';
import './custom_styles.css';

import { useState } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from "./components/ContactList";


function App() {
  
  const [contacts, updateContacts] = useState([]);
  
  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };

  const updateContact = (id, contactInfo) => {
    contacts[id] = contactInfo;
  }

  const getContact = (id) => {
    return contacts[id];
  };

  return (
    <div className="App">
      <h1>My Contacts</h1>
      <ContactForm addContact={addContact}/>
      <ContactList contacts={contacts} getContact={getContact} updateContact={updateContact} />
    </div>
  );
}

export default App;
