import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactListItem({contact}) {
    return (
        
        <Row className="row contact-list-item">
            <Col className="col-md-3 fullname">{contact.firstname} {contact.lastname}</Col>
            <Col className="col-md-3 age">{contact.age}</Col>
            <Col className="col-md-3 nationality">{contact.nationality}</Col>
            <Col className="col-md-3 email">{contact.email}</Col>
        </Row>

        // <div className="row contact-list-item">
        //     <p className="col-md-3 fullname">{contact.firstname} {contact.lastname}</p>
        //     <p className="col-md-3 age">{contact.age}</p>
        //     <p className="col-md-3 nationality">{contact.nationality}</p>
        //     <p className="col-md-3 email">{contact.email}</p>
        // </div>
    );
}