//用户时间处理
import React, {Component} from 'react'

export default class EventHandle extends Component {
    state={
        name: ''
    }

    constructor(props){
        super(props);
        //  this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} 
                    // onChange={e => this.handleChange(e)} 
                    onChange={this.handleChange} 
                    
                    />
                    <p>{this.state.name}</p>
            </div>
        )
    }

}
