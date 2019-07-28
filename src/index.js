import React from 'react';
import ReactDom from 'react-dom';
// import './index.css';
import style from './index.module.css'

import logo from './logo.svg'

//React 负责逻辑控制，例如：修改数据->vdom
const name = 'hello React';
const user = {
    firstName: 'tom',
    lastName: 'jerry'
}
function userName(user) {
    return user.firstName + '、' + user.lastName;
}
const html = <p>dom 元素也可以做为表达式</p>

// 数组转化成字符串显示
const arr = [1,2,3].map(val => <li key={val}>{val}</li>);


const jsx = (
    <div>
        <h1>{name}</h1>
        {userName(user)}
        {html}
        <ul>{arr}</ul>
        {/* 属性：静态值用用双引号，动态值用花括号 */}
        {/* <img src={logo} alt="logo" style={ {width:100} } className="logo"/> */}
        <img src={logo} alt="logo" style={ {width:100} } className={style.logo}/>
    </div>
);
console.log(jsx)

//ReactDom 负责渲染vdom->dom
ReactDom.render(
    jsx,
    document.getElementById('root')
)