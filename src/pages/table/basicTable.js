import React from 'react'
import { Table, Divider, Tag, Modal, message } from 'antd';
import axios from '../../axios/index.js'
export default class Tables extends React.Component {
    state = {
      loading:true
    }

    componentDidMount() {
        this.request();
    }

    handleDeelete = (record) => {
        Modal.confirm({
            title: "信息提示",
            content: '您确认删除提示吗',
            onOk: () => {
                message.success('删除成功')
            }
        })
    }

    columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
        ),
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
          <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
        ),
    }];

    request = () => {
        this.state.loading=true;
        axios.ajax({
            url: 'tablelist',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            this.setState({
                dataSource: res.result.list
            })
        }).
        finally(()=>{
          this.setState({
            loading:false
          })
        })
    }
    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
            ),
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                  <a href="javascript:;" onClick={()=>this.handleDeelete(record)}>删除</a>
            </span>
            ),
        }];
        return (
                <Table loading={this.state.loading} columns={columns} dataSource={this.state.dataSource} />
        );
    }
}