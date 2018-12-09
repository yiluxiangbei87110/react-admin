import React, { Component } from 'react';
import Child from './child';
import { Button } from 'antd'
class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: 'Felix'
        }
    }
    // getDefaultProps(){
    //     console.log('getdefaultProps')
    // }
    // getInitialState() {
    //     console.log('getInitialState')
    // }
    componentWillMount() {
        console.log('componentWillMount-----------parent')
    }
    componentDidMount() {
        console.log('componentDidMount-----------parent')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps-----------parent')
    }
    componentWillUnmount() {
        console.log('omponentWillUnmount-----------parent')
    }
    shouldComponentUpadate() {
        console.log('shouldComponentUpadate-----------parent')
    }
    componentWillUpdate() {
        console.log('componentWillUpdate-----------parent')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate-----------parent')
    }
    handleAdd1 = () => {
        console.log('点击之后')
        this.setState({
            count: this.state.count + 1
        })
    }

    handleAdd2() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        console.log('render----parent');
        return (
          <div className="components-process" style={{padding:'10px'}}>
           <p style={{background:'#f9c700',textAlign:'center'}}>react的生命周期</p>
           <p>{this.state.count}</p>
           <Button>antd点击一下</Button>
           <button onClick={this.handleAdd1}>增加</button>
           <button onClick={this.handleAdd2.bind(this)}>减少</button>
           <Child name={this.state.name}></Child>
          </div>
        );
    }
}

export default Parent;