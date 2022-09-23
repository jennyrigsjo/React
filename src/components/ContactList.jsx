import ContactListItem from "./ContactListItem";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactList({contacts, getContact, updateContact}) {

    const listItems = (contacts.length == 0) 
    ? <p className="no-contacts">(No persons to display)</p> 
    : <Container className="container contact-list">
        <Row className="row contact-list-headings">
            <Col className="contact-list-heading">Full Name</Col>
            <Col className="contact-list-heading">Age</Col>
            <Col className="contact-list-heading">Nationality</Col>
            <Col className="contact-list-heading">Email Address</Col>
            <Col className="contact-list-heading">Action</Col>
        </Row>
        {contacts.map((contact, index) => (<ContactListItem contact={contact} getContact={getContact} updateContact={updateContact} id={index} key={index}/>))}
      </Container>;

    return (
        <div className="contact-list-container">
            <h2>Contact List</h2>
            {listItems}
        </div>
    );
}