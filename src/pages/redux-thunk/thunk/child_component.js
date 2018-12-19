import React,{Fragment} from 'react';
import {Input,Icon, List, Avatar} from 'antd';

 const child =(props)=>{
		return (
				<Fragment>
					<h2>Test Thunk</h2>
					<div style={{ margin:'16px 40px',width:400 }}>
				      <Input addonAfter={<Icon onClick={props.handleAdd} type="plus" />} placeholder="请输入" value={props.val} onChange={props.hanldeChange} />
				    </div>
						<List
					        itemLayout="horizontal"
					        dataSource={props.list}
					        renderItem={(item,index) => (
					          <List.Item actions={[<a onClick={()=>props.handeDelete(index)} >delete</a>]}>
					              <List.Item.Meta
												avatar={<Avatar src="/images/headshot.png" />}
					                title={<a href="###">{item}</a>}
					                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
					              />
					              <div dangerouslySetInnerHTML={{__html: item}}></div>
					          </List.Item>
					        )}
					      />
			   </Fragment>

			)
}

export default child;