import React, { Component } from 'react';
import Song from './Song';

export class Main extends Component {
    render() {
        let data = this.props.data;
        return (
            <div id="main">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" id="checkAll" name="checkAll"
                                    checked={this.props.checkAll} 
                                    onChange={(e)=>{
                                        this.props.setCheckAll(e.target.checked)
                                    }} />
                                <label htmlFor="checkAll">全选</label>
                            </th>
                            <th>歌曲</th>
                            <th>歌手</th>
                            <th>收藏</th>
                            <th>删除</th>
                        </tr>
                    </thead>
                    <tbody style={{display: data.length?'':'none'}}>
                        {data.map((val,index)=>{
                            return (
                                <Song
                                    key={index}
                                    data={val}
                                    index={index}
                                    setCheck={this.props.setCheck} 
                                    setlike={this.props.setlike} 
                                    remove={this.props.remove}
                                    />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Main
