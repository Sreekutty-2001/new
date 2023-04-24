import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg";
import * as Icon from 'react-bootstrap-icons';
import MenuItem from "./MenuItem";
import './sidemenu.css'

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
    {
        name: "Dashboard",
        exact: true,
        to: "/",
        icon: <Icon.Microsoft/>,
    },
    {
        name: "Content",
        exact: true,
        to: `/content`,
        icon: <Icon.Airplane/>,
        subMenus: [
            {name: "Courses", to: "/content/courses", icon: <Icon.Activity/>},
            {name: "Videos", to: "/content/videos"},
        ],
    },
    {name: "Design", to: `/design`, iconClassName: "bi bi-vector-pen"},
    {
        name: "Content 2",
        exact: true,
        to: `/content-2`,
        iconClassName: "bi bi-speedometer2",
        subMenus: [
            {name: "Courses", to: "/content-2/courses"},
            {name: "Videos", to: "/content-2/videos"},
        ],
    },
    {name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen"},
    {name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen"},
    {name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen"},
];

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
            removeActiveClassFromSubMenu();

        // props.onCollapse(inactive);
    }, []);
    useEffect(() => {
        document.addEventListener('mouseup', function (e) {
            var container = document.getElementById('side-menu');
            var toggle = document.getElementById('sidebarToggle');
            if (!container.contains(e.target) && !toggle.contains(e.target)) {
                container.classList.add('d-none')
            }
        });
    }, [])

    //just an improvment and it is not recorded in video :(
    const removeActiveClassFromSubMenu = () => {
        document.querySelectorAll(".sub-menu").forEach((el) => {
            el.classList.remove("active");
        });
    };

    /*just a little improvement over click function of menuItem
      Now no need to use expand state variable in MenuItem component
    */
    useEffect(() => {
        let menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((el) => {
            el.addEventListener("click", (e) => {
                const next = el.nextElementSibling;
                removeActiveClassFromSubMenu();
                menuItems.forEach((el) => el.classList.remove("active"));
                el.classList.toggle("active");
                console.log(next);
                if (next !== null) {
                    next.classList.toggle("active");
                }
            });
        });
    }, []);

    return (
        <div className="d-none d-md-block bg-light side-menu" id={'side-menu'}>
            <div className="top-section text-center">
                <div className="logo">
                    <img src={logo} alt="webscript"/>
                </div>
            </div>

            {/*<div className="search-controller">*/}
            {/*    <button className="search-btn">*/}
            {/*        <i className="bi bi-search"></i>*/}
            {/*    </button>*/}

            {/*    <input type="text" placeholder="search"/>*/}
            {/*</div>*/}

            <div className="divider mt-3"></div>

            <div className="main-menu">
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <MenuItem
                            key={uuidv4()}
                            name={menuItem.name}
                            exact={"true"}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            icon={menuItem.icon}
                            onClick={(e) => {
                                if (inactive) {
                                    setInactive(false);
                                }
                            }}
                        />
                    ))}
                </ul>
            </div>

            {/*<div className="side-menu-footer">*/}
            {/*    <div className="avatar">*/}
            {/*        <img src={user} alt="user"/>*/}
            {/*    </div>*/}
            {/*    <div className="user-info">*/}
            {/*        <h6>Rizwan Khan</h6>*/}
            {/*        <p>rizwankhan@gmail.com</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default SideMenu;
