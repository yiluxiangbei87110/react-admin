import React from 'react'
import {Row,Col} from 'antd'
import Header from '../component/Header'
import Home from '../pages/home'
import SideBar from '../component/sideBar'
import '../common/style/common.less'

//为啥要继承，想使用它的生命周期里的方法
export default class Admin extends React.Component{
      render(){
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <SideBar></SideBar>
                </Col>
                
                <Col span="20" className="main">
                    <Header></Header>
                    <Row className="content">
                      {/*<Home/>*/}
                      {this.props.children}
                    </Row>
                </Col>
            </Row>
        );
    }
}

