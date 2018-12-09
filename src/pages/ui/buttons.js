import React from 'react'
import { Card, Button, Radio } from 'antd'

export default class Buttons extends React.Component {

    state = {
        loading: true,
        size: 'default'
    }

    handleCloseLoading = () => {
        this.setState({
            loading: false
        });
    }

    // handleChange = (e)=>{
    //     this.setState({
    //         size:e.target.value
    //     })
    // }

    handleChange(e) {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">Button</Button>
                    <Button style={{margin:'0 5px 0 5px'}}>Button</Button>
                    <Button style={{margin:'0 5px 0 5px'}} type="dashed">Button</Button>
                    <Button style={{margin:'0 5px 0 5px'}} type="danger">Button</Button>
                    <Button style={{margin:'0 5px 0 5px'}} disabled>Button</Button>
                     <Button style={{margin:'0 5px 0 5px'}} type="primary" icon="search">搜索</Button>
                    <Button style={{margin:'0 5px 0 5px'}} type="primary" loading={this.state.loading}>确定</Button>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleChange.bind(this)}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group> 
                    <Button type="primary" size={this.state.size}>Button</Button>
                    <Button style={{margin:'0 5px 0 5px'}} size={this.state.size}>Button</Button>
                    <Button style={{margin:'0 5px 0 5px'}} type="dashed" size={this.state.size}>Button</Button>
                    <Button type="danger" size={this.state.size}>Button</Button>
                </Card>
            </div>
        );
    }
}