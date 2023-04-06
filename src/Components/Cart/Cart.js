import React, { useState, useContext, useEffect } from 'react';

import classes from './Cart.module.css';

import iconImg from '../../Asset/cart.jpg'
import CartContext from '../../Store/Cart-Context';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';

const Cart = () => {

    const ctx = useContext(CartContext);

    // 添加一个state来设置详情是否显示
    const [showDetails, setShowDetails] = useState(false);

    // 添加显示详情页的函数
    const toggleDetailsHandler = () => {
        if(ctx.totalAmount === 0) {
            setShowDetails(false);
            return;
        }
        setShowDetails(prevState => !prevState);
    }

    // 添加一个state来设置结账页是否显示
    const [showCheckout, setShowCheckout] = useState(false);

    // 结账页函数
    const showCheckoutHandler = () => {
        if(ctx.totalAmount === 0) {
            return;
        }
        setShowCheckout(true);
    }

    // 关闭结账页的函数
    const hideCheckoutHandler = () => {
        setShowCheckout(false);
    }

    // 在组件每次重新渲染的时候，检查一下商品的总数量，如果为0，则修改showDetails为false
    // 组件每次重新渲染，组件的函数体就会执行
    // 以下代码会报错（Too many re-renders）
    // 因为执行setShowDetails(false)后，Cart组件就会重新渲染，在执行到这段代码时，又会引发组件重新重新渲染，形成死循环
    // if(ctx.totalAmount < 1) {
    //     // 购物车已经被清空
    //     setShowDetails(false);
    // }

    /*
        默认情况下， useEffect()中的函数，会在组件渲染完成后调用
            并且是每次渲染后都会调用

        在useEffect()可以传递第二个参数
            第二个参数是一个数组，在数组中可以指定Effect的依赖项
            指定后，只有当依赖发生变化时，Effect才会被触发
            通常会将Effect中使用的所有的局部变量都设置为依赖项
                这样一来，可以确保这些值发生变化时，会触发Effect
            像setState()是由钩子函数useState()生成的
                useState()会确保组件的每次渲染都会获得到相同的setState()对象
                所以setState()方法可以不设置到依赖中
            如果依赖项设置了一个空数组，则意味着Effect只会在组件初始化时触发一次
    */
    // useEffect(() => {

    //     console.log('useEffect执行了！');

    //     if(ctx.totalAmount < 1) {
    //         // 购物车已经被清空
    //         setShowDetails(false);
    //         setShowCheckout(false);
    //     }
    // }, [ctx, setShowDetails, setShowCheckout]);

    // 如果依赖项设置了一个空数组，则意味着Effect只会在组件初始化时触发一次
    // useEffect(() => {

    //     console.log('useEffect执行了！');

    //     if(ctx.totalAmount < 1) {
    //         // 购物车已经被清空
    //         setShowDetails(false);
    //         setShowCheckout(false);
    //     }
    // }, []);

    useEffect(() => {

        // console.log('useEffect执行了！');

        if(ctx.totalAmount < 1) {
            // 购物车已经被清空
            setShowDetails(false);
            setShowCheckout(false);
        }
    }, [ctx]);

    return (
        <div className={classes.cart} onClick={toggleDetailsHandler}>

            {/* 引入购车详情 */}
            {/* {showDetails && ctx.totalAmount > 0 ? <CartDetails /> : null} */}
            {showDetails && <CartDetails />}

            {/* 结账页 */}
            {showCheckout && <Checkout onHide={hideCheckoutHandler} />}

            <div className={classes.icon}>
                <img src={iconImg} />
                {
                    ctx.totalAmount === 0 ? null :
                    <span className={classes.totalAmount}>{ctx.totalAmount}</span>
                }
            </div>

            {
                ctx.totalAmount === 0 ?
                <p className={classes.noMeal}>未选购商品</p>
                :
                <p className={classes.price}>{ctx.totalPrice}</p>
            }

            <button
                className={`${classes.button} ${ctx.totalAmount === 0 ? classes.disabled : ''}`}
                onClick={showCheckoutHandler}
            >
                去结算
            </button>
        </div>
    );
};

export default Cart;