import React from 'react'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import { Menu, Icon } from 'antd';
import './index.less'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends  React.Component{
  componentWillMount(){
    const menuTreeNode=this.renderMenu(MenuConfig);
    this.setState({ menuTreeNode })
  }

  //为什么要这样写，不在声明周期，this的需要
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
          )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }

  render(){
    return(
      <div>
        <div className="logo">
          <img src="/images/logo.jpg"/>
        </div>

        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>

      )
  }
}



