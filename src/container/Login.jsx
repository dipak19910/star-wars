import { connect } from 'react-redux'
import React from "react"
import "../App.css"
import {setUserInfos} from "../actions/login"
import { bindActionCreators } from "redux";

class Login extends React.Component {
   
    render(){
      return   (

            <form className="form-wrapper" action="/action_page.php">
              <div className="imgcontainer">
                <img className="avatar" alt="Avatar" src={"/img_avatar2.png"} />
              </div>
              <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input value={this.props.username} type="text" required id="username" name="uname" onChange={this.props.setUserInfos} placeholder="Enter Username" />
                <label htmlFor="psw"><b>Password</b></label>
                <input  value={this.props.password}  type="password" onChange={this.props.setUserInfos} required id="password"  name="psw" placeholder="Enter Password" />
                <button type="submit">Login</button>
                <label>
                  <input type="checkbox" name="remember" defaultChecked="checked" /> Remember me
                </label>
              </div>
             
            </form>
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
        setUserInfos
    }, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(Login)