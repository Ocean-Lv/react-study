import React, { Component } from 'react'

//1.创建上下文
const Context = React.createContext();

//2.获取Provider，Consumer
const Provider = Context.Provider;
const Consumer = Context.Consumer;


function Child (props) {
    return (
        <div>
            <button onClick={()=>{props.add()}}>child</button>
            {props.counter}
        </div>
    )
}



export default class ContextTest extends Component {
    state = {
        counter: 0
    }

    add = ()=>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <Provider value={ {counter: this.state.counter, add: this.add} }>
                <Consumer>
                    {value => <Child {...value}></Child>}
                </Consumer>
            </Provider>
        )
    }

}
