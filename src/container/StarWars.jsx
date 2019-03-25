import { connect } from 'react-redux'
import React from "react"
import StarWarsDetail from "./StarWarsDetail"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StarWars extends React.Component {
    render(){
        let {match }= this.props
        return        <div>
          <Route exact path={match.url} render={() => (
        <h3>Please select a section: StarWars </h3>
      )}/>
        <Route path={ `${match.url}/:id`}component={StarWarsDetail} />
            
        </div>    }
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
export default connect(mapStateToProps)(StarWars)