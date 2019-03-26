import React from 'react'
import StarWarsDetail from './StarWarsDetail'
import { Route } from 'react-router-dom'
import List from '../component/List'
export default class StarWars extends React.Component {
  render () {
    let { match } = this.props
    return (
      <div>
        <Route exact path={match.url} render={() => <List {...this.props} />} />
        <Route path={`${match.url}/:id`} component={StarWarsDetail} />
      </div>
    )
  }
}
