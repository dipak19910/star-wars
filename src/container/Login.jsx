import { connect } from 'react-redux'
import React from 'react'
import '../App.css'
import { setUserInfos } from '../actions/login'
import { bindActionCreators } from 'redux'
import { get } from '../api'
import { setItem } from '../storage'

class Login extends React.Component {
  state = {}
  formSubmit = event => {
    event.preventDefault()
    get('people', {
      search: this.props.username
    }).then(({ data }) => {
      if (data.count === 0) {
        return this.setState({ error: 'User could not found.' })
      } else if (data.count > 1) {
        return this.setState({ error: 'User name password did not match.' })
      }
      data = data.results[0]
      if (data.birth_year !== this.props.password) {
        return this.setState({ error: 'User name password did not match.' })
      }
      setItem('user', data)
      this.props.history.push('/star-wars')
    })
  }
  render() {
    return (
      <div>
        <form className="form-wrapper" onSubmit={this.formSubmit}>
          <div className="imgcontainer">
            <img className="avatar" alt="Avatar" src={'/img_avatar2.png'} />
          </div>
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              value={this.props.username}
              type="text"
              required
              id="username"
              name="uname"
              onChange={this.props.setUserInfos}
              placeholder="Enter Username"
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              value={this.props.password}
              type="password"
              onChange={this.props.setUserInfos}
              required
              id="password"
              name="psw"
              placeholder="Enter Password"
            />
            <button type="submit">Login</button>
            <label>
              {this.state.error && (
                <div style={{ color: 'red' }}>{this.state.error}</div>
              )}
            </label>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    password: state.login.password
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setUserInfos
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
