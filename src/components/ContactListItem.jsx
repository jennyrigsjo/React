import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

export default function ContactListItem({contact, getContact, updateContact, contactID}) {

    const [contactInfo, setContactInfo] = useState(contact);
    const [editMode, setEditMode] = useState({display: "none"});
    const [viewMode, setViewMode] = useState({display: "flex"});

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
        setViewMode({display: "flex"});
      };

    return (
        <>
        <Row className="row contact-list-item" style={viewMode}>
            <Col className="fullname">{contactInfo.firstname} {contactInfo.lastname}</Col>
            <Col className="age">{contactInfo.age}</Col>
            <Col className="nationality">{contactInfo.nationality}</Col>
            <Col className="email">{contactInfo.email}</Col>
            <Col className="action">
                <Button variant="primary" type="button" onClick={() => handleEditContact()}>Edit</Button>
            </Col>
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

                <Button variant="primary" type="submit">Update</Button>
            </Form>
        </Row>
        </>
    );
}