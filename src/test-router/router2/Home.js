import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
export default class Home extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li>
            <Link to="/main">Home2</Link>
          </li>
          <li>
            <Link to="/about">about2</Link>
          </li>
          <li>
            <Link to="/Topics">Topics2</Link>
          </li>
          <li>
            <Link to="/Topics3213213">未知的路径</Link>
          </li>
        </ul>
        <hr/>
        {this.props.children}
      </div>
      )
  }
}