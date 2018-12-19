import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import NotMatch from './pages/not_match/NotMatch';
import BasicForm from './pages/form/basicForm';
import Login from './pages/form/login';
import Register from './pages/form/register';
import Admin from './pages/admin';
import Home from './pages/home';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import Table from './pages/table/basicTable';
import Editor from './pages/editor';
import Pie from './pages/charts/pie';
import China from './pages/charts/china';
import Bar from './pages/charts/bar';
import Bar2 from './pages/charts/bar_2';
import Bar3 from './pages/charts/bar_3';
import Funnel from './pages/charts/funnel';
import PictorialBar from './pages/charts/pictorialBar';
import Thunk from './pages/redux-thunk/thunk/parent_component';
export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path="/" exact component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}/>
                                <Route path="/admin/form/basicForm" component={BasicForm}/>
                                <Route path="/admin/form/login" component={Login}/>
                                <Route path="/admin/form/register" component={Register}/>
                                <Route path="/admin/ui/gallery" component={Gallery}/>
                                <Route path="/admin/ui/carousel" component={Carousel}/> 
                                <Route path="/admin/table/basic" component={Table}/> 
                                <Route path="/admin/editor" component={Editor}/> 
                                <Route path="/admin/charts/pie" component={Pie}/>   
                                <Route path="/admin/charts/funnel"  component={Funnel}/>
                                <Route path="/admin/charts/china" component={China} /> 
                                <Route path="/admin/charts/bar" component={Bar} />
                                <Route path="/admin/charts/bar_2" component={Bar2} />
                                <Route path="/admin/charts/bar_3" component={Bar3} />
                                <Route path="/admin/charts/pictorialBar" component={PictorialBar}/>
                                <Route path="/admin/redux/thunk" component={Thunk}/>    
                                <Route component={NotMatch}></Route>
                            </Switch>
                        </Admin>         
                    } />
                </App>
            </HashRouter>
        );
    }
}