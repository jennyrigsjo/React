import { useState } from "react";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function ContactForm({addContact}) {

  const [contactInfo, setContactInfo] = useState({
    firstname: "",
    lastname: "",
    age: "",
    nationality: "",
    email: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ firstname: "", lastname: "", age: "", nationality: "", email: ""}); //reset form values after submit
  };

    return (
      <div className="contact-form-container">

        <h2>Contact Form</h2>

        <Form className="contact-form" onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit">Add Contact</Button>
        </Form>

        {/* <form className="contact-form" onSubmit={handleSubmit}>

          <div className="field">
            <input type="text" name="firstname" placeholder="First Name" value={contactInfo.firstname} onChange={handleChange} />
          </div>

          <div className="field">
            <input type="text" name="lastname" placeholder="Last Name" value={contactInfo.lastname} onChange={handleChange} />
          </div>

          <div className="field">
            <input type="number" name="age" placeholder="Age" value={contactInfo.age} onChange={handleChange} />
          </div>

          <div className="field">
            <input type="text" name="nationality" placeholder="Nationality" value={contactInfo.nationality} onChange={handleChange} />
          </div>

          <div className="field">
            <input type="email" name="email" placeholder="Email" value={contactInfo.email} onChange={handleChange} />
          </div>

          <div className="field">
            <input type="submit" name="submit" value="Add contact"/>
          </div>

        </form> */}

      </div>
    );
  }