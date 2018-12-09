import React from 'react';
import {Card,Form, Button, Input,Icon } from 'antd';
import moment from 'moment';
import BgImg from '../../common/images/bg.jpg';
const FormItem = Form.Item;
class FormRegister extends React.Component {
    state = {};
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            }
            let userInfo = this.props.form.getFieldsValue();
            this.props.history.push('/admin/home');
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{
                backgroundImage: `url(${BgImg})`,
                backgroundSize:'cover',
                height:'100vh'
            }}>
                <Card style={{
                    width:'340px',
                    position:'absolute',
                    right:'100px',
                    top:'20vh'
                }}>
                    <Form layout="horizontal">
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'Felix',
                                    rules: [
                                        {
                                            required: true,
                                            min:2,
                                            pattern:/^[^\s]+$/,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '123456',
                                    rules:[{
                                        required:true,
                                        message:'密码必填项'
                                    }]
                                })(
                                    <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit} style={{width:'100%'}}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormRegister);