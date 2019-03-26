import { connect } from 'react-redux'
import React from "react"
import StarWarsDetail from "./StarWarsDetail"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from "../component/List"
export default class StarWars extends React.Component {
    render(){
        let {match }= this.props
    return        <div>
          <Route exact path={match.url} render={() => (

        <List />
      )}/>
        <Route path={ `${match.url}/:id`}component={StarWarsDetail} />
            
        </div>    }
}
