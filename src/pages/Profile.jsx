import {useState, useContext} from "react";
import {Navigate, useParams} from 'react-router-dom';
import {ContactsContext}  from '../services/ContactsContext';
import {UserContext}  from '../services/UserContext';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Profile() {

    const {user} = useContext(UserContext);

    const {getContact} = useContext(ContactsContext);
    const {updateContact} = useContext(ContactsContext);
    
    let { id } = useParams();
    let contact = getContact(id);

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
        updateContact(id, contactInfo);

        setEditMode({display: "none"});
        setViewMode({display: "block"});
    };

    const handleCancelEdit = () => {
    setContactInfo(contact); //reset to original values
    setEditMode({display: "none"});
    setViewMode({display: "block"});
    };

    if (user.auth === false) 
    {
        return (<Navigate to="/login"/>);
    }

    return (
        <>
        <h2>Contact details for {contactInfo.firstname} {contactInfo.lastname}</h2>
        <div className="view-contactinfo" style={viewMode}>
            <p className="fullname"><b>First name:</b> {contactInfo.firstname}</p>
            <p className="fullname"><b>Last name:</b> {contactInfo.lastname}</p>
            <p className="age"><b>Age:</b> {contactInfo.age}</p>
            <p className="nationality"><b>Nationality:</b> {contactInfo.nationality}</p>
            <p className="email"><b>Email:</b> {contactInfo.email}</p>
            <p className="action">
                <Button variant="primary" type="button" onClick={handleEditContact}>Edit</Button>
            </p>
        </div>
        <div style={editMode}>
            <Form className="edit-contactinfo" onSubmit={handleSubmit}>
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
                <Button variant="warning" type="button" onClick={handleCancelEdit}>Cancel</Button>
            </Form>
        </div>
        </>
    );
}

export default Profile;