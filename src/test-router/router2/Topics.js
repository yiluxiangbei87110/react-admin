import React from  'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Topic from './Topic'
export default class Topics extends React.Component{
  render(){
    return (
        <div>
          <h2>Topics</h2>
          <ul>
            <li>
              <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
            </li>
          </ul>
          {/*设置动态路由，并且在在路由里获取参数*/}
         <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
         <Route exact path={this.props.match.url} render={() => <h3>请选择一个子选项</h3>} />


        </div>
      )
  }
}
    
