import React, { Component } from 'react'

export class Song extends Component {
    render() {
        let data = this.props.data;
        return (
            <tr className={(data.selected?'selected':'') + ' ' +
                (data.like?'like':'')}>
                <td>
                    <input type="checkbox" checked={data.selected} />
                </td>
                <td>{data.title}</td>
                <td>{data.singer}</td>
                <td>
                    <input type="checkbox" checked={data.like} />
                </td>
                <td>
                    <a href="#">X</a>
                </td>
            </tr>
        )
    }
}

export default Song
