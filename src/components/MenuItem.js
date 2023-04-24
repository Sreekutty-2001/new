import React, {useRef, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {NavLink, Link} from "react-router-dom";

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
    const {name, subMenus, icon, onClick, to, exact} = props;
    const [expand, setExpand] = useState(false);

    return (
        <li onClick={props.onClick} key={uuidv4()}>
            <Link
                key={uuidv4()}
                exact={"true"}
                to={to}
                // onClick={() => {
                //   setExpand((e) => !e);
                // }}
                className={`menu-item`}
            >
                <div className="menu-icon">
                    {icon}
                </div>
                <div>{name}</div>

            </Link>
            {subMenus && subMenus.length > 0 ? (
                <ul className={`sub-menu`}>
                    {subMenus.map((menu, index) => (
                        <li key={uuidv4()}>
                            <NavLink to={menu.to}>
                                <div className="menu-icon">
                                    {menu.icon}
                                </div>
                                <span>{menu.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

export default MenuItem;
