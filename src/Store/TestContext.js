import React from 'react';

/*
    Context相当于一个公共的存储空间
        可以将多个组件中都需要访问的数据统一存储到一个Context中
        这样无需通过props逐层传递，即可使组件访问这些数据
*/

const TestContext = React.createContext({
    name: '孙悟空',
    age: 18
});

export default TestContext;
