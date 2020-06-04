import React, { Component } from 'react';
class List extends Component{
   
    state={isEditable:false,isDone:false};
   
    myList=(item)=>{
        const toggleState=()=>{this.setState({isEditable:!this.state.isEditable});
        window.itemvalue=item;
        window.ipvalue=item.value;
        }
        const submitDelete=(event)=>{
            event.preventDefault();
            
            this.props.deleteData(item);
        }        
        const toggleDone=(event)=>{
            this.setState({isDone:!this.state.isDone})
        };
        const markedDone=(event)=>{
            event.preventDefault();
            // console.log(this.state);
            // const doneValue=this.state.isDone;
            
            this.props.markDone(item.key,this.state.isDone);
            // this.setState({isDone:false})
        }
        
        return (
            <div key={item.key} className="list-element">
               <form onSubmit={markedDone}> <button onClick={toggleDone} className="done-button">Done</button></form>
                <li onClick={toggleState} style={{color:item.isMarked?'#405d27':''}}>{item.value}</li>
                <form onSubmit={submitDelete}><button className="remove-button" >X</button></form>
            </div>
           
            
            
        )
    }
    handleSubmit=(event)=>{
        window.itemvalue.value= (event.target.inputvalue.value);
        event.preventDefault();
        this.props.updateData(window.itemvalue);
        this.setState({isEditable:!this.state.isEditable});
    }
    editForm=()=>{
        // console.log(window.itemvalue);
        return(
            <div className="formUpdate">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" defaultValue={window.ipvalue} name="inputvalue"  />
                    <button >Update</button>
                </form>
            </div>
        );
    }
    render(){
        const data=(this.props.sendData);
        const ListItems=data.map(this.myList);
        const iseditable=this.state.isEditable;
        const editform=this.editForm();
        return(
            <section className="section">
                {iseditable?
                (editform):
                    
                (
                    <div className="list">
                        <h1>{ListItems}</h1>
                        
                    </div>
                    
                )
                }
            </section>
        );
    }
}


export default List;