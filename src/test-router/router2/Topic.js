import React from  'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
export default class Topic extends React.Component{
  render(){
    return (
        <div>
          {this.props.match.params.topicId}
        </div>
      )
  }
}
    
