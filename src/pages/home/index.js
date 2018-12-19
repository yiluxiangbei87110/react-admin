import React from  'react';
import './index.less';
import {Button} from 'antd';
export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={
      count:0
    };

  }

  handleClick(){
      this.setState({
        count:this.state.count+1
    })
  }

  render(){
    return (
        <div className="home-wrap">
            <Button onClick={this.handleClick}>点击一下</Button>
            <div> &nbsp; result: <span style={{padding:'0 20px'}}>{this.state.count}</span></div>
        </div>
      )
  }
}

