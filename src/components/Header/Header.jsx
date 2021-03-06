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
import './Header.css';

const Header = ({children}) => {
    return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{children} </NavbarBrand>

                <StatsContainer/>

                <ul className="Nav-menu">
                    <li className="Nav-menu__item">
                        <Link className="Nav-menu__item__link" to="/todo/">ToDo</Link>
                    </li>
                    <li className="Nav-menu__item">
                        <Link className="Nav-menu__item__link" to="/components/">Components</Link>
                    </li>
                    <li className="Nav-menu__item">
                        <Link className="Nav-menu__item__link" to="/about/">About</Link>
                    </li>
                    <li className="Nav-menu__item">
                        <Link className="Nav-menu__item__link" to="/login/">Auth</Link>
                    </li>
                </ul>
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