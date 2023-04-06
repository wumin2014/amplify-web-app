import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import CartContext from '../../../Store/Cart-Context';

import classes from './Checkout.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar';

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {

    const ctx = useContext(CartContext);

    return ReactDOM.createPortal(
        <div className={classes.checkout}>
            <div className={classes.close}>
                <FontAwesomeIcon icon={faXmark} onClick={() => {props.onHide()}} />
            </div>

            <div className={classes.mealsDesc}>
                <header className={classes.header}>
                    <h2 className={classes.title}>餐品详情</h2>
                </header>
                <div className={classes.meals}>
                    {ctx.items.map(item => <CheckoutItem key={item.id} meal={item} />)}
                </div>
                <footer className={classes.footer}>
                    <p className={classes.totalPrice}>{ctx.totalPrice}</p>
                </footer>
            </div>

            <Bar totalPrice={ctx.totalPrice} />

        </div>,
        checkoutRoot
    );
};

export default Checkout;