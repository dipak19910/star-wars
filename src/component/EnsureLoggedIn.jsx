import { connect } from 'react-redux'
import React from "react"
import "../App.css"
import {setUserInfos,setLoggedUserInfos} from "../actions/login"
import { bindActionCreators } from "redux";
import {get} from "../api"
import {getItem} from "../storage"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


 class EnsureLoggedIn extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isRedirect:false
    }
  }
  componentWillMount(){
    let user= getItem('user')
    if(!user){
       this.state.isRedirect=true;
       return;
    }
    this.props.setLoggedUserInfos({userInfos:user})

  }
    render(){
      if (this.state.isRedirect) {
        return <Redirect to='/sign-in'/>;
      }
      return   (
         this.props.children
          );
    }
}


const mapStateToProps = state => {
 return{}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      setUserInfos,
      setLoggedUserInfos
  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(EnsureLoggedIn)