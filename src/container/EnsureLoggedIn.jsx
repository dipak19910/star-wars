import { connect } from 'react-redux'
import React from "react"
import "../App.css"
import {setLoggedInUser} from "../actions/ensureLoggedIn"
import { bindActionCreators } from "redux";
import {getItem} from "../storage"
class Login extends React.Component {
   componentDidMount(){
    let user= getItem('user')
    if(user){
      this.props.setLoggedInUser('user',user)
    }
   }
    render(){
      return   (
        
           this.props.children
          );
    }
}

const mapStateToProps = state => {
  return {
    Username:state.login.username,
    password:state.login.password
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      setLoggedInUser
    }, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(Login)