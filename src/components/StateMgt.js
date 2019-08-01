import React, {Component} from 'react';

//state & setState
class Clock extends Component {
    constructor (props) {
        super(props);
        //初始化状态
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        //定时器
        this.timerId = setInterval(()=>{
            this.setState({
                date: new Date()
            }, ()=>{    //通知父组件，子组件变更
                // this.props.change(this.state.date)
            })
        },1000);
    }
    // 组件销毁时 ，释放定时器
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}



export default function StateMgt() {
    return (
        <div>
            {/* 给子组件传事件，获取子组件变更value */}
            {/* <Clock change={(date)=>{console.log(date.toLocaleTimeString())}}></Clock> */}
            <Clock></Clock>
        </div>
    )
}
