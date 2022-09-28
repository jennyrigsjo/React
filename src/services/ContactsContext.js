import { React, useState, createContext } from "react";
import DummyData from "../data/people";

export const ContactsContext = createContext();

export function ContactsProvider({children}) {

    const [contacts, setContacts] = useState(DummyData);

    const getContact = (id) => {
        return contacts[id];
    }
    
    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const updateContact = (id, contactInfo) => {

        const updatedList = contacts.map((contact, index) => {
            if (index == id) 
            {
                return contactInfo;
            }
            else
            {
                return contact;
            }
        });

        setContacts(updatedList);
    }

    return (
    <ContactsContext.Provider value={{contacts, getContact, addContact, updateContact}}>
        {children}
    </ContactsContext.Provider>
    );
}