import { connect } from 'react-redux'
import React from "react"

class StarWarsDetail extends React.Component {
    render(){
      return  <div>
            StarWarsDetail
        </div>
    }
}

const mapStateToProps = state => {
  return {
    // obj is an Immutable object in Smart Component, but it’s converted to a plain
    // JavaScript object by toJS, and so passed to DumbComponent as a pure JavaScript
    // object. Because it’s still an Immutable.JS object here in mapStateToProps, though,
    // there is no issue with errant re-renderings.
    data:state
  }
}
export default connect(mapStateToProps)(StarWarsDetail)