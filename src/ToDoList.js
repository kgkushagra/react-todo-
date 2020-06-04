import React,{Component} from 'react';
import AddItems from './AddItems'

class ToDoList extends Component {
    render() {
        return (
            <div className="header-container">
                <h1>
                    To-Do App 

                </h1>
                <AddItems/>
            </div>
        );
    }
}



export default ToDoList;