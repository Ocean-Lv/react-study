import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import JsxTest from './components/JsxTest';
import StateMgt from './components/StateMgt';
import EventHandle from './components/EventHandle';
import ContextTest from './components/ContextTest';

import Index from './components/songTable/Index'

import Home from './Home'
import Add from './Add'

// import React, { Component } from 'react'

// export class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// export default App



export default function App(props) {
    return (
        <Router>
            <div id="menu">
                <h1>首页</h1>
                <nav>
                    <Link to="/">首页</Link> |
                    <Link to="/add">添加</Link> |
                </nav>
                <Switch>
                    <Route path="/add" component={Add} />
                    {/* <Route path="/" component={Home} /> */}
                    <Route path="/" render={()=>{
                        return(
                            <Home 
                                // data={this.state.listState?this.state.data:likeData}
                                // checkAll={this.isCheckAll()} 
                                // setCheckAll={this.setCheckAll} 
                                // setCheck={this.setCheck} 
                                // setlike={this.setlike} 
                                // remove={this.remove}
                            />
                        )
                    }} />

                </Switch>


            </div>
            {/* <div> */}
                {/* <h1>{props.title}</h1> */}
                {/* <JsxTest /> */}
                {/* <StateMgt /> */}
                {/* <EventHandle /> */}
                {/* <ContextTest /> */}
                {/* <Index></Index>/ */}
            {/* </div> */}
        </Router>
    )
}
