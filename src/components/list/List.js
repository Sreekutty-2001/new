import React from "react";
import Avatar from "@mui/material/Avatar";
import "./List.css";
import { Container } from "react-bootstrap";
function List({ data }) {
    return (
        <Container style={{ marginTop: "10px" }} id="list">
            <div className="avatar-div">
                <Avatar
                    style={{ height: "30px", width: "30px" }}
                    alt="Remy Sharp"
                    src={data.img}
                />
            </div>

            <div className="details">
                <p style={{ marginTop: "5px" }}>{data.name}</p>
                <p style={{ lineHeight: "0px" }}>{data.date}</p>
            </div>

            <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" ,  }}>
                <p style={{ fontSize: "12px", color: "#7CFC00"  }}>+${data.amount}</p>
            </div>
        </Container>
    );
}

export default List;
