import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../component/Header'
import Home from '../component/Home'
import About from '../component/About'
import Topics from '../component/Topics'
import Login from '../container/Login'
import StarWars from '../container/StarWars'
import EnsureLoggedIn from '../component/EnsureLoggedIn'
import SingOut from '../component/SingOut'
function MainRoutes () {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={Login} />
          <Route
            render={props => (
              <EnsureLoggedIn {...props}>
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/sign-out" component={SingOut} />
                <Route path="/star-wars" component={StarWars} />
              </EnsureLoggedIn>
            )}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default MainRoutes
