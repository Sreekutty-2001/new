import React, {useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Dropdown, Button} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import * as Icon from 'react-bootstrap-icons';
import axios from "axios";

function Message() {
    let phoneRef = useRef()
    let messageRef = useRef()
    const handleSubmit = (e) => {
        let token = "EABQnm55DEbwBAMQbwZCeBV79Fk01OaBU7DMzIjqZC41tMj8GfPoRt47vYtdVT5y3mv1vR0vhu7MFdxqKbhcElXPo0okGjHBBmnwPRm3ajCZCVDGGiZAz1MwsZBULRh6J3z7xDXxqgwJpDKfYGcIZBZBKQF34ZAQrOEqNz6sk6OmIZA2ZCQZBhJTcZCdvkJWZBYJBjQNojyJseVNOrQQZDZD"
        let phone_number_id = '101761259558987'
        let phone = '919656291915'
        let msg_body = "hello"
        axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v12.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: phone,
          text: { body: "Ack: " + msg_body },
        },
        headers: { "Content-Type": "application/json" },
      });
    }
    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Whatapp Number</label>
                <input ref={phoneRef} type="text" className="form-control" id="exampleFormControlInput1"
                       placeholder="whatapp number"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea ref={messageRef} className="form-control" id="exampleFormControlTextarea1"
                          rows="3"></textarea>
            </div>
            <Button onClick={handleSubmit}>Submit</Button>
        </>
    );
}

export default Message;