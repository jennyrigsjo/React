import ContactListItem from "./ContactListItem";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactList({contacts}) {

    const listItems = (contacts.length == 0) 
    ? <p className="no-contacts">(No persons to display)</p> 
    : <Container className="container-fluid contact-list">
        <Row className="row contact-list-headings">
            <Col className="col-md-3 contact-list-heading">Full Name</Col>
            <Col className="col-md-3 contact-list-heading">Age</Col>
            <Col className="col-md-3 contact-list-heading">Nationality</Col>
            <Col className="col-md-3 contact-list-heading">Email Address</Col>
        </Row>
        {contacts.map((contact, index) => (<ContactListItem contact={contact} key={index}/>))}
      </Container>;

{/* <div className="container-fluid contact-list">
        <div className="row contact-list-headings">
            <span className="col-md-3 contact-list-heading">Full Name</span>
            <span className="col-md-3 contact-list-heading">Age</span>
            <span className="col-md-3 contact-list-heading">Nationality</span>
            <span className="col-md-3 contact-list-heading">Email Address</span>
        </div>
        {contacts.map((contact, index) => (<ContactListItem contact={contact} key={index}/>))}
      </div> */}

    return (
        <div className="contact-list-container">
            <h2>Contact List</h2>
            {listItems}
        </div>
    );
}