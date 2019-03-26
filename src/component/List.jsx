
import React from "react";
import FetchData from "../hoc/FetchData"
class List extends React.Component{
   
   state={
    searchValue:''
   }
    listenScrollEvent(event){
        var node = event.target;
        const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
        if (bottom) {      
            this.props.fetchData()
        }  
    }
    onChange=(event)=>{
        this.setState({searchValue:event.target.value})
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.searchValue!==this.state.searchValue){
            this.props.fetchData(false,{resetPage:true,search:this.state.searchValue})
        }
        
    }
    render(){
        return <div>
            <input value={this.state.searchValue} onChange={this.onChange}/>
            {!this.state.searchValue && <div className="flex-container" onScroll={this.listenScrollEvent.bind(this)} >
            {this.props.data.map(row=>{
                
              return  <div  >
                      <span>{row.name}</span>
                      <span>{row.population}</span>
                    </div>
            })}
        </div>}
        {this.state.searchValue && <div className="flex-container" onScroll={this.listenScrollEvent.bind(this)} >
            {this.props.data.map(row=>{
                
              return  <div  >
                      <span>{row.name}</span>
                      <span>{row.population}</span>
                    </div>
            })}
        </div>}
        </div>
    }
}
export default FetchData(List)