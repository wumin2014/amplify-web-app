import React, { useState, useReducer } from 'react';
import Meals from './Components/Meals/Meals';
import CartContext from './Store/Cart-Context';
import FilterMeals from './Components/FilterMeals/FilterMeals';
import Cart from './Components/Cart/Cart';

// 模拟一组食物的数据
const MEALS_DATA = [
  {
      id: 1,
      title: '汉堡包',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 1,
      img: '/img/meals/1.jpg'
  },
  {
      id: 2,
      title: '双层吉士汉堡',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 2,
      img: '/img/meals/2.jpg'
  },
  {
      id: 3,
      title: '巨无霸',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 3,
      img: '/img/meals/3.jpg'
  },
  {
      id: 4,
      title: '麦辣鸡腿汉堡',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 4,
      img: '/img/meals/4.jpg'
  },
  {
      id: 5,
      title: '板烧鸡腿堡',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 5,
      img: '/img/meals/5.jpg'
  },
  {
      id: 6,
      title: '麦香鸡',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 6,
      img: '/img/meals/6.jpg'
  },
  {
      id: 7,
      title: '吉士汉堡包',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 7,
      img: '/img/meals/7.jpg'
  },
  {
      id: 8,
      title: '麦香鱼',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 8,
      img: '/img/meals/8.jpg'
  },
  {
      id: 9,
      title: '不素之霸双层牛堡',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 9,
      img: '/img/meals/9.jpg'
  },
  {
      id: 10,
      title: '双层深海鳕鱼堡',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 10,
      img: '/img/meals/10.jpg'
  },
  {
      id: 11,
      title: '安格斯MAX厚牛培根堡',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 11,
      img: '/img/meals/11.jpg'
  },
  {
      id: 12,
      title: '培根蔬萃双层牛堡',
      desc: '百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭百分百纯牛肉配搭',
      price: 12,
      img: '/img/meals/12.jpg'
  }
];

// 定义cartReducer
const cartReducer = (cartData, action) => {

  // meal：要添加进购物车的商品
  // 对购物车进行复制
  const newCart = {...cartData};

  switch(action.type) {
      default:
          return cartData;

      case 'ADD':
          if(newCart.items.indexOf(action.meal) < 0) {
              newCart.items.push(action.meal);
              action.meal.amount = 1;

          } else {
              action.meal.amount += 1;
          }

          newCart.totalAmount += 1;
          newCart.totalPrice += action.meal.price;
          return newCart;

      case 'REMOVE':
          action.meal.amount -= 1;
          if(action.meal.amount === 0) {
              newCart.items.splice(newCart.items.indexOf(action.meal), 1);
          }

          newCart.totalAmount -= 1;
          newCart.totalPrice -= action.meal.price;
          return newCart;

      case 'CLEAR':
          newCart.items.forEach(item => delete item.amount);
          newCart.items = [];
          newCart.totalAmount = 0;
          newCart.totalPrice = 0;
          return newCart;
  }
};

function App() {

  // 创建一个cartData用来存储食物列表
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  /*
      创建一个cartData，用来存储购物车商品
      1. 商品列表
      2. 商品总数（totalAmount）
      3. 商品总价（totalPrice）
  */
  const [cartData, cartDispatch] = useReducer(cartReducer, {
      items: [],
      totalAmount: 0,
      totalPrice: 0
  });

  // 创建一个过滤meals的函数
  const filterHandler = (keyword) => {
      // 判断keyword
      const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) > -1)
      setMealsData(newMealsData);
  };

  return (
      <CartContext.Provider value={{...cartData, cartDispatch}}>
          <div>
              <FilterMeals onFilter={filterHandler} />
              <Meals
                  mealsData={mealsData}
              />
              <Cart />
          </div>
      </CartContext.Provider>
  );
};

export default App;
