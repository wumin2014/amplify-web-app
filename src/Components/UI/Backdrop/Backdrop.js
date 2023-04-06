import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Backdrop.module.css';

const backdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
    return ReactDOM.createPortal(
        <div
            {...props}
            className={`${classes.backdrop} ${props.className}`}
        >
            {props.children}
        </div>, backdropRoot
    )
};

export default Backdrop;