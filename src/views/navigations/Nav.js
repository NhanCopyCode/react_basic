import React from "react";
import "./Nav.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useParams,
    useRouteMatch,
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" exact activeClassName="active-1 active">
                    Home
                </NavLink>
                <NavLink to="/form-todo" activeClassName="active-1 active">
                    Todo
                </NavLink>
                <NavLink to="/component" activeClassName="active-1 active">
                    MyComponent
                </NavLink>
                <NavLink to="/user" activeClassName="active-1 active">
                    User
                </NavLink>
            </div>
        );
    }
}

export default Nav;
