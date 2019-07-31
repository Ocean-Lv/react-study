import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="go_right">
                    <span>当前选中1首歌曲</span>
                    <span>共3首歌曲</span>
                </div>
                <button>删除选中歌曲</button>
                <button>收藏选中歌曲</button>
                <button>取消收藏选中歌曲</button>
                <button>查看收藏清单</button>
                <button>查看所有清单</button>

            </footer>
        )
    }
}

export default Footer
