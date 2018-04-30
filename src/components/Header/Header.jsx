import React from 'react';
import PropTypes from 'prop-types';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import StatsContainer from "../TodoApp/Stats/StatsContainer";


const Header = ({children}) => {
    return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{children} </NavbarBrand>

                {/*<StatsContainer/>*/}

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/todo/">ToDo</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Login">Sigin</NavLink>
                    </NavItem>

                </Nav>
            </Navbar>

        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default Header;