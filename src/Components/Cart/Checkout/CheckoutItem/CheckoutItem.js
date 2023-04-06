import React from 'react';
import Counter from '../../../UI/Counter/Counter';
import classes from './CheckoutItem.module.css';

const CheckoutItem = (props) => {
    return (
        <div className={classes.checkoutItem}>
            <div className={classes.mealImg}>
                <img src={props.meal.img} alt="" />
            </div>
            <div className={classes.desc}>
                <h2 className={classes.title}>{props.meal.title}</h2>
                <div className={classes.priceOuter}>
                    <Counter meal={props.meal} />
                    <div className={classes.price}>{props.meal.price * props.meal.amount}</div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutItem;