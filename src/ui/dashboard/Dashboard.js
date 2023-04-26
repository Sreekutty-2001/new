import React from 'react'
import DetailsCard from '../../components/cards/DetailsCard'
import BarChart from '../../components/charts/BarChart'
import LineChart from '../../components/charts/LineChart'
import PieChart from '../../components/charts/PieChart'
import "./dashboard.css"
import { Container, Row, Col, Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import AddList from '../../components/addList/AddList'
function Dashboard() {
    return (

        <Container fluid>
            {/* <hr className='hr' /> */}
            <Row style={{marginTop:"15px"}}>
                <Col style={{ border:"1px solid #cbc8c8" , width: "72%",padding:"10px" }} md={10}>
                    <Container fluid>
                        <Row style={{marginBottom:"10px"}}>
                            <Col style={{fontWeight:"bolder"}} md={12}>General report</Col>
                        </Row>
                    </Container>
                    <DetailsCard />
                    <Container fluid>
                        <Row style={{ marginTop: "50px" }}>
                            <Col md={12} style={{ marginBottom: "7px" }}>General report</Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>

                            <Col md={6}>
                                <BarChart />
                            </Col>
                            <Col md={3}>
                                <LineChart />
                            </Col>
                            <Col md={3}>
                                <PieChart />

                            </Col>
                        </Row>
                    </Container>



                </Col>

                <Col style={{ marginLeft: 0, marginRight: 0 ,  border:"1px solid #cbc8c8" }}>
                    <Container md={6}>
                        <Row>
                            <Col style={{ margin: "10px 0px 0px 10px", fontSize: "12px", fontWeight: "bolder"  }}> Add list</Col>
                        </Row>
                        <Row>
                            <Col>
                                <AddList />
                            </Col>
                        </Row>
                    </Container>
                </Col>

            </Row>

        </Container>


    )
}

export default Dashboard