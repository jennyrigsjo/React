import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

export default function ContactListItem({contact, getContact, updateContact, contactID}) {

    const [contactInfo, setContactInfo] = useState(contact);
    const [editMode, setEditMode] = useState({display: "none"});
    const [viewMode, setViewMode] = useState({display: "block"});

    const handleEditContact = () => {
        setEditMode({display: "block"});
        setViewMode({display: "none"});
    }

    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateContact(contactID, contactInfo);

        let updatedInfo = getContact(contactID);
        setContactInfo(updatedInfo);

        setEditMode({display: "none"});
        setViewMode({display: "block"});
      };

    return (
        <>
        <Row className="row contact-list-item" style={viewMode}>
            <Col className="col-md-3 fullname">{contactInfo.firstname} {contactInfo.lastname}</Col>
            <Col className="col-md-2 age">{contactInfo.age}</Col>
            <Col className="col-md-2 nationality">{contactInfo.nationality}</Col>
            <Col className="col-md-3 email">{contactInfo.email}</Col>
            <Col className="col-md-2 action"><button type="button" onClick={() => handleEditContact()}>Edit</button></Col>
        </Row>
        <Row style={editMode}>
            <Form className="edit-contact-form" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control type="text" name="firstname" placeholder="First Name" value={contactInfo.firstname} onChange={handleChange} required/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="text" name="lastname" placeholder="Last Name" value={contactInfo.lastname} onChange={handleChange} required/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="number" name="age" placeholder="Age" value={contactInfo.age} onChange={handleChange} required/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="text" name="nationality" placeholder="Nationality" value={contactInfo.nationality} onChange={handleChange} required/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="email" name="email" placeholder="Email" value={contactInfo.email} onChange={handleChange} required/>
                    </Col>
                </Row>

                <Button variant="primary" type="submit">Edit Contact</Button>
            </Form>
        </Row>
        </>
        

        // <div className="row contact-list-item">
        //     <p className="col-md-3 fullname">{contact.firstname} {contact.lastname}</p>
        //     <p className="col-md-3 age">{contact.age}</p>
        //     <p className="col-md-3 nationality">{contact.nationality}</p>
        //     <p className="col-md-3 email">{contact.email}</p>
        // </div>
    );
}