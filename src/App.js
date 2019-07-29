import React from 'react';
import JsxTest from './components/JsxTest';
import StateMgt from './components/StateMgt';
import EventHandle from './components/EventHandle';

// import React, { Component } from 'react'

// export class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// export default App



export default function App(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            {/* <JsxTest /> */}
            <StateMgt />
            <EventHandle />
        </div>
    )
}
