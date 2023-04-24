import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Dropdown, DropdownButton} from 'react-bootstrap';
import DropDown from "./elements/DropDown";
import user from "../assets/user.jpg";
import Image from "react-bootstrap/Image";
import * as Icon from 'react-bootstrap-icons';

function Header() {
    const handleToggle = (e) => {
        document.getElementById('side-menu').classList.toggle('d-none');
    }
    return (
        <>
            <Navbar collapseOnSelect className={"de-flex px-2"} expand="lg"
                    style={{width: '100%', background: '#1565C0'}}>
                <a id={'sidebarToggle'} style={{'color': 'white'}} onClick={handleToggle}><Icon.List/></a>

                <div className="me-auto">
                </div>
                <DropDown title={'Message'} icon={<Icon.BellFill color={"#FFE87C"}/>}/>
                <DropDown image={<Image roundedCircle={true} src={user} style={{height: 24, width: 24}}/>}/>

            </Navbar>
        </>
    );
}

export default Header;