import SideMenu, { menuItems } from "../SideMenu";
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";
import Message from "../../ui/whatapp/Message";
import Dashboard from "../../ui/dashboard/Dashboard";
import './layout.css'


const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;
const Error = () => <h1>Error 2</h1>;

function Layout() {
    return (
        <>
            <div className={`page-wrapper`}>
                <Header />

                <div className="d-flex body-wrapper">
                    <SideMenu />
                    <div className={`p-2 content`}>

                        <Routes>
                            <Route exact={"true"} path={"/"} element={<Dashboard />}></Route>
                            <Route exact={"true"} path={"/"} element={<Message />}></Route>
                            <Route exact={"true"} path={"/content"} element={<Content />}></Route>
                            <Route exact={"true"} path={"/content/courses"} element={<Courses />}></Route>
                            <Route exact={"true"} path={"/content/videos"} element={<Videos />}></Route>
                            <Route exact={"true"} path={"/design"} element={<Design />}></Route>
                            <Route exact={"true"} path={"/content-2"} element={<Content2 />}></Route>
                            <Route exact={"true"} path={"/content-2/courses"} element={<Courses2 />}></Route>
                            <Route exact={"true"} path={"/content-2/videos"} element={<Videos2 />}></Route>
                            <Route exact={"true"} path={"/design-2"} element={<Design2 />}></Route>
                            <Route path={"*"} element={<Error />}></Route>
                        </Routes>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Layout;
