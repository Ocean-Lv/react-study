import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//入口文件



//React 负责逻辑控制，例如：修改数据->vdom
//ReactDom 负责渲染vdom->dom
ReactDom.render(
    <App></App>,
    document.getElementById('root')
)