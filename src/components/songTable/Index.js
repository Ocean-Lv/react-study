import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './style.css'

let songs =[
    {
        title: "权御天下",
        singer: "墨韵随步摇/司鼓君",
        selected: true,
        like: false
    },
    {
        title: "拜无忧",
        singer: "萧忆情Alex",
        selected: false,
        like: true
    },
    {
        title: "侠客某",
        singer: "祝贺",
        selected: false,
        like: false
    },
    {
        title: "明月天涯",
        singer: "五音Jw",
        selected: false,
        like: false
    },
    {
        title: "扇子舞",
        singer: "李常超",
        selected: false,
        like: false
    }
]

export class Index extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            data: songs
        }
    }
    render() {
        return (
            <div id="musicApp">
                <Header></Header>
                <Main data={this.state.data}></Main>
                <Footer></Footer>
            </div>
        )
    }
}

export default Index
