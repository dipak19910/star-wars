import React from 'react'
import { removeItem } from '../storage'
import { Link } from 'react-router-dom'
import { setUserInfos, setLoggedUserInfos } from '../actions/login'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignOut extends React.Component {
  componentDidMount () {
    removeItem('user')
    this.props.setLoggedUserInfos({ userInfos: undefined })
  }
  render () {
    return (
      <div>
        <div>
          <span>Successfully logout</span>
        </div>
        <div>
          <Link to="sign-in">Back to Login page</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      setUserInfos,
      setLoggedUserInfos
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)
