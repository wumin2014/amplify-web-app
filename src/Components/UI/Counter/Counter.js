import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import counterModule from './Counter.module.css';
import CartContext from '../../../Store/Cart-Context';

/*
    引入Fontawesome
        - 安装依赖
            npm i --save @fortawesome/fontawesome-svg-core
            npm i --save @fortawesome/free-solid-svg-icons
            npm i --save @fortawesome/free-regular-svg-icons
            npm i --save @fortawesome/react-fontawesome@latest
            或使用yarn安装
            yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/react-fontawesome@latest
        
        - 引入组件
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        
        - 引入图标
            import { faPlus } from '@fortawesome/free-solid-svg-icons'
        
        - 使用组件
            <FontAwesomeIcon icon={faPlus} />
*/

// 计数器组件
const Counter = (props) => {

    // 获取cartContext
    const ctx = useContext(CartContext);

    // 添加购物车商品的函数
    const addButtonHandler = () => {
        ctx.cartDispatch({type: 'ADD', meal: props.meal});
    };

    // 减少购物车商品的函数
    const removeButtonHandler = () => {
        ctx.cartDispatch({type: 'REMOVE', meal: props.meal});
    };

    return (
        <div className={counterModule.counter}>
            {
                props.meal.amount && props.meal.amount > 0 ?
                <>
                    <button className={counterModule.sub} onClick={removeButtonHandler}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className={counterModule.count}>{props.meal.amount}</span>
                </> : null
            }
            
            <button className={counterModule.add} onClick={addButtonHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Counter;