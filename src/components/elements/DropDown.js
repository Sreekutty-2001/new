import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import * as Icon from 'react-bootstrap-icons';

function DropDown(props) {

    const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
        <span ref={ref}
              onClick={(e) => {
                  e.preventDefault();
                  onClick(e);
              }}
              style={{'color': 'white', cursor: "pointer"}}>
            {props.image && props.image}
            {children}
            {(!props.icon&&!props.image)&& <Icon.ChevronDown/>}
        </span>
    ));
    const handleSelect = (e) => {

    }
    return (
        <>
            <Dropdown as={ButtonGroup} onSelect={handleSelect} title={''} className={"px-2"}>
                <Dropdown.Toggle align={'end'} as={CustomToggle} id="dropdown-custom-1">
                    {props.title && props.title}
                    {props.icon && props.icon}
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors" align={'end'}>
                    <Dropdown.Item key={1} eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item key={2} eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item key={3} eventKey="3" active>
                        <input type={'checkbox'}/> Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item key={4} eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>{' '}

        </>
    );
}

export default DropDown;