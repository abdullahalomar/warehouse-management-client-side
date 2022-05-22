import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Quote = () => {
    return (
        <div className='container w-50 my-4'>
            <h2 className='text-center'>REQUEST FOR A QUOTE</h2>
            <Form>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Name</Form.Label>
                   <Form.Control type="text" placeholder="Name" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="text" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Phone</Form.Label>
                   <Form.Control type="number" placeholder="Phone" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                   <Form.Label>Message</Form.Label>
                   <Form.Control as="textarea" rows={3} />
                 </Form.Group>
                 <Button variant="outline-secondary">SUBMIT</Button>{' '}
            </Form>
        </div>
    );
};

export default Quote;