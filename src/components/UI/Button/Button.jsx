import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

function MyButton(props) {
    return (
        <Button className={props.className} onClick={props.onClick} {...props}>
            {props.icon ? <i className="material-icons">{props.icon}</i> : props.children}

        </Button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default MyButton;