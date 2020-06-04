import React,{Component} from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={items:[]};
    }
    handleChange=(e)=>{
        this.setState({items:{value:e.target.value,key:Date.now(),isMarked:false}});
    }
    sendData=(event)=>{
        event.preventDefault();
        this.props.addData(this.state.items);
        this.myInput.value="";

    }
       
    
    


    render() {
        
        return (
            <div  className="search-bar">
                
                <form onSubmit={this.sendData}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} ref={(e)=>this.myInput=e}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}
