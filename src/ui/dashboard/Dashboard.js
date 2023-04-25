import React from 'react'
import DetailsCard from '../../components/cards/DetailsCard'
import BarChart from '../../components/charts/BarChart'
import LineChart from '../../components/charts/LineChart'
import PieChart from '../../components/charts/PieChart'
import "./dashboard.css"
import { Container,Row, Col,Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
function Dashboard() {
    return (
       
        <Container fluid>
            
            <Row>
                <Col md={10}>
                <Container fluid>
                <Row>
                <Col md={12}>General report</Col>
                </Row>
                </Container>
                <DetailsCard/>
                <Container fluid>
                <Row style={{marginTop:"50px"}}>
                <Col md={12} style={{marginBottom:"7px"}}>General report</Col>
                </Row>
                </Container>
                <Container>
                <Row>
                <Col md={6}>
                    <BarChart />
                </Col>
                <Col md={3}>
                        <LineChart/>
                </Col>
                <Col md={3}>
                    <PieChart/>

                </Col>
                </Row>
                </Container>



                </Col>
                <Col md={2}>
                    add list
                </Col>
                
            </Row>
            
        </Container>
        
       
    )
}

export default Dashboard