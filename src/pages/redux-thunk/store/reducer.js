import {ADD_ITEM,INIT_LIST} from './actionTypes'; INIT_LIST

const currentState={
	val:'',
	list:[]
}

export default (state=currentState,action)=>{
	switch(action.type){
		case ADD_ITEM:
			state.list.unshift(action.val)
			return state;
		case INIT_LIST:
			state.list=action.list;
			return state;
		default:
			return state;
	}
}