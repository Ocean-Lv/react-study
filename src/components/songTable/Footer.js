import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        let length = this.props.length;
        let selectedLength = this.props.selectedLength;
        let listShow =this.props.listState;
        let likeData = this.props.likeData;
        return (
            <footer id="footer" style={{display:length?'':'none'}}>
                <div className="go_right">
                    <span>当前选中{selectedLength}首歌曲</span>/
                    <span>共{length}首歌曲</span>
                </div>
                <button
                    style={{display:selectedLength?'':'none'}}
                    onClick={()=>{
                        this.props.removeSelected();
                    }}
                >删除选中歌曲</button>
                <button
                    style={{display:selectedLength?'':'none'}}
                    onClick={()=>{
                        this.props.likeSelect();
                    }}
                >收藏选中歌曲</button>
                <button
                    style={{display:selectedLength?'':'none'}} 
                    onClick={()=>{
                        this.props.canceLikeSelect();                        
                    }}
                >取消收藏选中歌曲</button>
                <button
                    style={{display:(listShow && likeData)?'':'none'}}
                    onClick={()=>{
                        this.props.showLikeList(false)
                    }}
                >查看收藏清单</button>
                <button
                    style={{display:!listShow?'':'none'}}
                    onClick={()=>{
                        this.props.showLikeList(true)
                    }}
                >查看所有清单</button>

            </footer>
        )
    }
}

export default Footer
