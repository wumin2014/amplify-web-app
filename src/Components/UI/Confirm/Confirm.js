import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Confirm.module.css'

const Confirm = (props) => {
    return (
        <Backdrop className={classes.confirmOuter} /* onClick={props.onCancel} */>
            <div className={classes.confirm}>
                <p className={classes.confirmText}>{props.confirmText}</p>
                <div>
                    <button onClick={(e) => {props.onCancel(e)}}
                         className={classes.cancel}>取消</button>
                    <button onClick={(e) => {props.onOk(e)}}
                         className={classes.ok}>确认</button>
                </div>
            </div>
        </Backdrop>
    );
};

export default Confirm;