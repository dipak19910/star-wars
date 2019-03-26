import { connect } from 'react-redux'
import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <div>
        {' '}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/star-wars">Star War Users</Link>
          </li>
          {getUser(this.props)}
        </ul>
      </div>
    )
  }
}

function getUser (props) {
  if (props.user) {
    return (
      <li>
        <Link to="/sign-out">Sign Out</Link>
      </li>
    )
  } else {
    return (
      <li>
        <Link to="/sign-in">Sign In</Link>
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.userInfos
  }
}

export default connect(mapStateToProps)(Header)
