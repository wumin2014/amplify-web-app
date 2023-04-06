import React, { useState, useContext } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './CartDetails.module.css';
import CardContext from '../../../Store/Cart-Context';
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm';

const CartDetails = () => {

    const ctx = useContext(CardContext);

    // 设置state控制确认框的显示
    const [showConfirm, setShowConfirm] = useState(false);

    // 添加函数侠士确认窗口
    const showConfirmHandler = () => {
        setShowConfirm(true);
    };

    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    };

    const okHandler = (e) => {
        // 清空购物车
        ctx.cartDispatch({type: 'CLEAR'});
    };

    return (
        <Backdrop>

            {showConfirm && <Confirm
                confirmText={'确认清空购物车吗？'}
                onCancel={cancelHandler}
                onOk={okHandler} />}

            <div
                className={classes.cartDetails}
                onClick={e => e.stopPropagation()}
            >
                <header className={classes.header}>
                    <h2 className={classes.title}>餐品详情</h2>
                    <div className={classes.clear}>
                        <FontAwesomeIcon icon={faTrash}
                        onClick={showConfirmHandler} />
                        <span>清空购物车</span>
                    </div>
                </header>

                <div className={classes.mealList}>
                    {
                        ctx.items.map(
                            item => {
                                return <Meal key={item.id} meal={item} noDesc />
                            }
                        )
                    }
                </div>
            </div>
        </Backdrop>
    );
};

export default CartDetails;