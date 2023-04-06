import React, { useContext } from 'react';
import TestContext from '../Store/TestContext';

/*
    使用Context方式二：
        1. 引入context
        2. 使用钩子函数useContext()获取context
            useContext()需要一个Context作为参数
            它会将Context中的数据获取并作为返回值返回
        
    TestContext.Provider
        - 数据的生产者，可以使用它来指定Context中的数据
        - 通过value来指定Context中存储的数据
            那么，在该组件下所有的子组件都可以通过COntext来访问它所指定的数据

    当通过Context访问数据时，它会读取离他最近的Provider中的数据
        如果没有Provider，则读取Context中的默认数据

    注意：钩子函数只适用于函数组件，不适用于类组件，类组件还是参照TestA.js
*/
const TestB = () => {

    // 使用钩子函数获取context
    const ctx = useContext(TestContext);
    return (
        <div>
            {ctx.name} - {ctx.age}
        </div>
    );
};

export default TestB;