import React from 'react'
import { data } from '../../assets/DummyDatas/data'
import "./DetailsCard.css";
import {Card,Container,Row,Col} from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
function DetailsCard() {
  return (
    <Container fluid>
    <Row>
        <Col>
        <Card className='p-3'>
            <Icon.Camera className='text-info'/>
            <p className='num1'>10</p>
            <p>Live camera</p>
        </Card>
        </Col>
        <Col md={3} lg>
        <Card className='p-3'>
            <Icon.Camera className='text-info'/>
            <p className='num2'>5</p>
            <p>Timelapse camera</p>

        </Card>
        </Col>
        <Col md={3}>
        <Card className='p-3'>
            <Icon.Camera className='text-info'/>
            <p className='num3'>356</p>
            <p>Users</p>

        </Card>
        </Col>
        <Col md={3}>
        <Card className='p-3'>
            <Icon.Camera className='text-info'/>
            <p className='num4'>127</p>
            <p>Enquiries</p>

        </Card>
        </Col>
    </Row>
    </Container>
  )
}

export default DetailsCard