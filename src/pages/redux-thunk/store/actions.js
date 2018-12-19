import {ADD_ITEM,INIT_LIST} from './actionTypes';
import axios from 'axios';
export const addItemAction=(val)=>({
	type:ADD_ITEM,
	val:val
});

export const  initListAction=(list)=>({
	type:INIT_LIST,
	list:list
});

export const getListAction = () => 
     (dispatch) => 
        axios.get('https://www.easy-mock.com/mock/5b94e432dd236325f85bf85d/example/tablelist_copy_1543023492967')
        .then(res => {
            const action = initListAction(res.data.result.list.map(item=>item.name));
            dispatch(action);
        });

