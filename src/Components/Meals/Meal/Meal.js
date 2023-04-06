import React from 'react';

import mealModule from './Meal.module.css'
import Counter from '../../UI/Counter/Counter';

const Meal = (props) => {

    return (
        <div className={mealModule.meal}>
            <div className={mealModule.imgBox}>
                <img src={props.meal.img}></img>
            </div>
            <div className={mealModule.descBox}>
                <h2 className={mealModule.title}>{props.meal.title}</h2>
                {
                    props.noDesc ? null : <p className={mealModule.desc}>{props.meal.desc}</p>
                }
                <div className={mealModule.priceWrap}>
                    <span className={mealModule.price}>{props.meal.price}</span>
                    {/* <Counter meal={props.meal} onAdd={props.onAdd} onRemove={props.onRemove} /> */}
                    <Counter meal={props.meal} />
                </div>
            </div>
        </div>
    );
};

export default Meal;