import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './FilterMeals.module.css'

const FilterMeals = (props) => {

    const [keyword, setKeyWord] = useState('');

    const inputChangeHandler = e => {
        // const keyword = e.target.value.trim();
        // props.onFilter(keyword);

        setKeyWord(e.target.value.trim());
    }

    // 通过Effect改造练习
    useEffect(() => {

        // 降低数据过滤的次数，提高用户体验
        // 用户输入完了再过滤，用户输入的过程中，不要过滤
        // 当用户停止输入动作1秒后，才查询
        // 开启定时器的同时，要关掉上一次
        const timer = setTimeout(() => {

            // console.log('Effect触发了！');

            props.onFilter(keyword);
        }, 1000);

        // 在Effect回调函数中，可以指定一个函数作为返回值
        // 这个函数可以称为清理函数，它会在下次Effect执行前调用
        // 可以在这个函数中，做一些工作来清除上一次Effect执行所带来的的影响
        return () => {
            // console.log('Effect的返回函数触发了！');
            clearTimeout(timer);
        };
        
    }, [keyword]);

    return (
        <div className={classes.filterMeals}>
            <div className={classes.inputOuter}>
                <input type="text"
                    placeholder={"请输入关键字"}
                    className={classes.searchInput}
                    onChange={inputChangeHandler}
                    value={keyword} /* 定义const [keyword, setKeyWord] = useState('');后用 */
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className={classes.searchIcon}
                />
            </div>
        </div>
    );
};

export default FilterMeals;