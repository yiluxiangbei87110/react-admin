import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topics from './Topics'
//必须用一个router 来包裹起来，并且内部有一个元素包裹起来
export default class Home extends React.Component{
  render(){
    return(
      <HashRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/Topics">Topics</Link>
          </li>
        </ul>
        <hr/>
        
        {
        /*
            如果地址栏输入/about,则会显示main和about的内容，此时多匹配。
            因为/about会被拆解成两部分/（对应main）和 /about（对应about）,exact 精确匹配解决这个问题。
            <Route exact={true} path="/" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
        */
        }


        {
          /*
              可以exact 精确匹配解决这个问题。输入什么就加载对应的路由
              <Route exact={true} path="/" component={Main}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/topics" component={Topics}></Route>
          */
        }

        <p>如果使用switch，永远加载main 因为/about会被拆解成两部分/ 和about，switch只匹配一个/(main)。</p>
        <Switch>
            <Route path="/" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
        </Switch>
      </div>
      </HashRouter>
      )
  }
}