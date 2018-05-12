import React from 'react';
import PropTypes from 'prop-types';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem, NavLink,
} from 'reactstrap';
import StatsContainer from "../TodoApp/Stats/StatsContainer";
import {Link} from "react-router-dom";
import classes from './Header.css';

const Header = ({children}) => {
    return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{children} </NavbarBrand>

                <StatsContainer/>

                <Nav className="ml-auto" navbar>
                    <NavItem className={classes.Header_nav}>
                        <Link to="/todo/">ToDo</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={classes.Header_nav_link} to="/components/">Components</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/login">Auth</Link>
                    </NavItem>
                </Nav>
            </Navbar>

        </header>
    );
};

Header.propTypes = {
    color: PropTypes.string,
    dark: PropTypes.bool,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    fixed: PropTypes.string,
    light: PropTypes.bool,
    role: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    title: PropTypes.string
};

export default Header;