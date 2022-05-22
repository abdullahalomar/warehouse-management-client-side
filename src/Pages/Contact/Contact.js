import React from 'react';
import { Button, Form } from 'react-bootstrap';
import phone from '../../images/icons8-phone-50.png';
import watch from '../../images/icons8-last-24-hours-50.png';
import instagram from '../../images/icons8-instagram-50.png';
import address from '../../images/icons8-address-50.png';

const Contact = () => {
    return (
        <div className='my-5'>
            <div class="container">
            <div class="row">
              <div class="col">
                        <h3 className='mb-3'>CONTACT US ANY TIME FOR ANY QUESTIONS</h3>
                        <div className='mb-4 d-flex'>
                            <img src={phone} alt="" width={48}/>
                            <span className='mt-2 ms-3'><p>+880123456789</p></span>
                        </div>
                        <div className='mb-3 d-flex'>
                            <img src={watch} alt="" width={50} height={50 }/>
                            <span className='ms-3'><p>
                            Mon-Fri 9pm-6pm <br />
                            Sat 10pm-5pm</p></span>
                        </div>
                        <div className='mb-4 d-flex'>
                            <img src={instagram} alt="" width={48} />
                            <h6 className='mx-3 my-2'>Follow Us</h6>
                        </div>
                        <div className='d-flex'>
                            <img src={address} alt="" width={48} />
                            <p className='mx-3 my-2'>Example, address <br />road-b, 4002</p>
                        </div>
              </div>
              <div class="col">
                 <h3>MESSAGE US</h3>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="outline-secondary">SEND MESSAGE</Button>{' '}
                    </Form>
              </div>
            </div>
          </div>
        </div>
        
    );
};

export default Contact;