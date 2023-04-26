import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import List from "../list/List";
import { listData } from "../../assets/DummyDatas/data";
function AddList() {
    return (
        <Container fluid>
            <Row>
                {listData.map((data) => {
                    return <List data={data} />;
                })}
            </Row>
        </Container>
    );
}

export default AddList;
