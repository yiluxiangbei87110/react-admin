import React from 'react'
import {HashRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topics from './Topics'
import Home from './Home'
import NoMatch from './404'
export default class IRouter extends React.Component{
  render(){
    return(
      <Router>
        <Home>
          <Switch>
            <Route path="/main" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
            <Route component={NoMatch} />
          </Switch>
        </Home>
      </Router>
      )
  }
}