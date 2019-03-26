
import { connect } from 'react-redux'
import React from "react"
import "../App.css"
import {get} from "../api"

const FetchData=(WrappedComponent) =>{
    // ...and returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          data: [],
          page:1,
          loading:false
        };
      }
  fetch=(loading,params={})=>{
    if(loading){
      this.setState({loading:true})
    }
    let {resetPage,...restParams} =params
    if(resetPage){
      this.state.page=1
      this.state.data=[]
    }
    get('planets',{
       page:this.state.page,
       ...restParams
    }).then(({data})=>{
      console.log(data)
      let _data=this.state.data
      _data.pop()
        this.setState({data:[..._data,...data.results],page:this.state.page+1,loading:false})
    })
  }
      componentDidMount() {
        this.fetch(true)
      
      }
  
  
      render() {
        if(this.state.loading){
          return <div>
            loading...
          </div>
        }
        return <WrappedComponent data={this.state.data} {...this.props} fetchData={this.fetch} />;
      }
    };
  }

  export default FetchData