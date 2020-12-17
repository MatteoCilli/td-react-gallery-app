import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to="/a320">A320</NavLink>
            </li>
            <li>
                <NavLink to="/lufthansa">Lufthansa</NavLink>
            </li>
            <li>
                <NavLink to="/efa">EFA</NavLink>
            </li>
        </ul>
    </nav>
    );
};

export default Nav;