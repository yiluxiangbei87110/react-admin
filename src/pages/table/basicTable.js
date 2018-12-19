import React,{Fragment} from 'react'
import { Table, Divider, Tag, Modal, message,Card } from 'antd';
import axios from '../../axios/index.js'
export default class Tables extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        this.request();
    }

    handleDeelete = (record) => {
        Modal.confirm({
            title: "信息提示",
            content: '您确认删除吗',
            onOk: () => {
                message.success('删除成功')
            }
        })
    }

    request = () => {
        this.state.loading = true;
        axios.ajax({
            url: 'table/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            this.setState({
                dataSource: res.data.list
            })
        }).
        finally(() => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        const rowSelection = {
            // type:'radio',
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.age >80, // Column configuration not to be checked
                name: record.name,
            }),
        };
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
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender',
            render: (gender) => {
                return gender === 1 ? '男' : '女'
            }
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
            <Fragment>
                <Card></Card>
                <Table  pagination={true}  rowSelection={rowSelection} loading={this.state.loading} columns={columns} dataSource={this.state.dataSource} />
            </Fragment>
        );
    }
}