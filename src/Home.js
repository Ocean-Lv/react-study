import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class All extends Component {
    render() {
        return (
            <div>
                <h3>所有列表</h3>
            </div>
        )
    }
}


class Like extends Component {
    render() {
        return (
            <div>
                <h3>收藏列表</h3>
            </div>
        )
    }
}

export class Home extends Component {
    render() {
        return (
            <div>
                <h2>列表页面</h2>
                <nav>
                    <Link to="/">所有列表</Link> |
                    <Link to="/like">收藏列表</Link> |
                </nav>
                <Route path="/" exact component={All} />
                <Route path="/like" component={Like} />
            </div>
        )
    }
}

export default Home
