import React from 'react';
import SearchBar from './SearchBar';
import List from './List';

class AddItems extends React.Component {
    
    state={items:[]};
    handleSubmit=(data)=>{
        this.setState({
            items:[
                ...this.state.items,
                data
            ]
        });
        // console.log(this.state.items);
    }
    updateData=(data)=>{
        // const {,key}=data;
        // const updatedValue=(data.value);
        // console.log(updatedValue);
        // this.setState({
            
        // })
    }
    delete=(data)=>{
        const keytodel=data.key;
        const filteredItems=this.state.items.filter(function(item){
            return (item.key!==keytodel);
        });
        this.setState({
            items:filteredItems
        });
    }
    
    mark=(key,data)=>{
        console.log(key,data);
        const items=this.state.items;
        const changeIsMarked=(item)=>{

            if(item.key===key){
                item.isMarked=data;
                // console.log(item);

        }

      }
      const updatedItems=items.map(changeIsMarked);
      this.setState({updatedItems});
    }
    find=(data)=>{
        console.log(this.state.items);
        let currentList=this.state.items;
        let newList=[];

        if(data!==""){

            newList=currentList.filter(item=>{
                return (item.value.includes(data));
            });
        }else{
                newList=currentList;

            }

            this.setState({
                items:newList
            });


        
        
       
    }
    render() {
        const senddata=(this.state.items);
        return (
            <div className="list-content">
                <SearchBar addData={this.handleSubmit} findData={this.find}/>
                <List sendData={senddata} updateData={this.updateData} deleteData={this.delete} markDone={this.mark}/>
                
            </div>
        );
    }
}


export default AddItems;