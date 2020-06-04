import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import './index.css';

class App extends Component {
    render() {
        return (
            <div className="outer-container">
                <ToDoList/>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));
export default App;