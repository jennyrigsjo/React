import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from "../components/ContactList";

function Contacts() {

    return (
        <>
            <h1>Contacts</h1>
            <ContactForm/>
            <ContactList/>
        </>
    )
}

export default Contacts;