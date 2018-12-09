import React from 'react'
import { Card, Button, Modal } from 'antd'

export default class Modals extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }

    // setState是一个异步的过程，同时返回一个对象，箭头函数后要加一个小括号
    handleOpen = (type) => {
        this.setState(() => ({
            [type]: true
        }), () => {
            console.log(this.state)
        });

    }
    render() {
        return (
            <div>
                <Card title="Modal" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>基础弹框</Button>
                </Card>
                <Modal 
                title="react" 
                visible={this.state.showModal1} onCancel={()=>{
                    this.setState({
                        showModal1:false
                    })
                }}>
                    <p>欢迎学习react</p>
                </Modal>
            </div>
        );
    }
}