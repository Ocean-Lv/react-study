import React, { Component } from 'react'

export class Header extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: "",
            singer: ""
        }
    }
    render() {
        return (
            <header id="header">
                <h2 className="title">播放列表</h2>
                <input type="text" placeholder="输入歌曲名"
                  value={this.state.title} 
                  onChange={(e)=>{
                          this.setState({
                            title: e.target.value
                            })
                        }} 
                />
                <input type="text" placeholder="输入歌手名" 
                    value={this.state.singer} 
                    onChange={(e)=>{
                        this.setState({
                          singer: e.target.value
                          })
                      }} 
                     />
                <button 
                    onClick={()=>{
                        // console.log(this.state)
                            this.props.add(this.state.title, this.state.singer);
                            this.setState({
                                title: '',
                                singer: ''
                            })
                        }
                    }>
                添加音乐</button>
            </header>
        )
    }
}

export default Header
