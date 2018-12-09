import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        console.log('componentWillMount-----------child')
    }
    componentDidMount() {
        console.log('componentDidMount-----------child')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps-----------child')
    }
    componentWillUnmount() {
        console.log('omponentWillUnmount-----------child')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpadate-----------child')
        return true
    }
    componentWillUpdate() {
        console.log('componentWillUpdate-----------child')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate-----------child')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render() {
        console.log('render---------child');
        return (
            <div className="components-process">
        {this.props.name}
      </div>
        );
    }
}

export default Child;