import React, { useReducer, useState } from 'react';
import { useContext } from 'react';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import MsgContext from '../context/msgContext';
import Page1 from './Page1';





const Home = () => { 

    const { msgState, dispatch } = useContext(MsgContext);


  return (
    <Container className='my-5'>
        <Row className='justify-content-center'>
            <Col md={5}>
                <Card className='shadow'>
                    <Card.Body>
                        <input type="text" value={msgState} onChange={ e => dispatch({ type : 'MSG_UPDATE' , payload : e.target.value }) } className="form-control" />
                        <Page1 />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Home;