import React,{Component,Fragment} from 'react';
import Child from './child_component';
import Store from '../store/redux.main';
import {addItemAction,getListAction} from '../store/actions'
export default class Parent extends Component{
	
	constructor(props){
		super(props);
		this.state=Store.getState();
		Store.subscribe(this.handleStoreChange);
	}

	hanldeChange=(e)=>{
			this.setState({
				val:e.target.value
			});
		
	}

	handleAdd=()=>{
		if(this.state.val){
			//const list=this.state.list;
			//this.setState({
			//	list:[...list,this.state.val],
			//	val:''
			//});
			Store.dispatch(addItemAction(this.state.val))
		}
	}

	handeDelete=(index)=>{
		const list=[...this.state.list];
		list.splice(index,1);
		this.setState({
			list
		});
	}

	// 当store发生变化时
	handleStoreChange=()=>{
		this.setState(Store.getState());
	}

	componentDidMount(){
		Store.dispatch(getListAction());
	}

	componentWillUnmount(){
		// 一直取消监听不了？？？
		// Store.unsubscribe(this.handleStoreChange)
	}

	render(){
		const {val,list}=this.state;
		{/*
			return (
				   <Fragment>
				   		<input type="text" placeholder="请输入" value={val} onChange={this.hanldeChange}/>
				   		<button onClick={this.handleAdd}>添加</button>
				   		<ul>
				   			{
				   				list.map((item,index)=>{
				   					return <li key={index} onClick={()=>this.handeDelete(index)}>{item}</li>
				   				})
				   			}
				   		</ul>
				   </Fragment>
				)

		*/}

		return (

				<Child val={val} list={list}  handleAdd={this.handleAdd} hanldeChange={this.hanldeChange} handeDelete={this.handeDelete}></Child>
			)

	}
}