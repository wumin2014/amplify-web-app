import React from 'react';
import Meal from './Meal/Meal';

import mealsModule from './Meals.module.css'

/*
    食物列表的组件
*/
const Meals = (props) => {
    return (

        /*
            现在将滚动条设置给了Meals
        */
        
        /*
        <div className={mealsModule.meals}>
            {props.mealsData.map(item =>
                <Meal key={item.id} meal={item} 
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                />
            )}
        </div>
        */
        
        <div className={mealsModule.meals}>
            {props.mealsData.map(item =>
                <Meal key={item.id} meal={item} />
            )}
        </div>
    );
};

export default Meals;