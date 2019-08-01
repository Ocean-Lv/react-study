import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header id="header">
                <h2 className="title">播放列表</h2>
                <input type="text" placeholder="输入歌曲名" />
                <input type="text" placeholder="输入歌手名" />
                <input type="text" placeholder="添加音乐" />
            </header>
        )
    }
}

export default Header
