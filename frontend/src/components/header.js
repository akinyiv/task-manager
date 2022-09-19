import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Task 
            </NavLink>
            <NavLink to="/createuser" activeClassName="is-active">Create User</NavLink>
            <NavLink to="/users" activeClassName="is-active"> User</NavLink>

        </div>
    );
};

export default Header;