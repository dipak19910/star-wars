import { connect } from 'react-redux'
import React from 'react'
import '../App.css'
import { setUserInfos, setLoggedUserInfos } from '../actions/login'
import { bindActionCreators } from 'redux'
import { getItem } from '../storage'
import { Redirect } from 'react-router-dom'

class EnsureLoggedIn extends React.Component {
  constructor (props) {
    super(props)
    this.isRedirect = false
  }
  componentWillMount () {
    let user = getItem('user')
    if (!user) {
      this.isRedirect = true
      return
    }
    this.props.setLoggedUserInfos({ userInfos: user })
  }
  render () {
    if (this.isRedirect) {
      return <Redirect to="/sign-in" />
    }
    return this.props.children
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

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedIn)
