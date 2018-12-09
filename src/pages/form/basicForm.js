import React from 'react';
import {Form,Card,Input,Button,message,Icon,Checkbox} from 'antd';
const FormItem=Form.Item;
 class FormLogin extends React.Component{
    handleSubmit=()=>{
        const userInfo=this.props.form.getFieldsValue();
        console.log(userInfo);
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName} 恭喜你注册成功`);
            }
        })
    }
    render(){
        // 固定写法
        const {getFieldDecorator} =this.props.form;
        return (

            <div>
                <Card title="行内排列">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                         <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                         <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="水平排列">
                    <Form>
                        <FormItem>
                        {
                            getFieldDecorator('userName',{
                                initialValue:"Felix",
                                rules:[{
                                    required:true,
                                    message:'用户名不能为空'
                                },{
                                    min:5,max:10,
                                    message:'长度不在范围'
                                },{
                                    pattern:/^\w+$/,
                                    message:'只能是数字字母下划线'
                                }]
                            })(<Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />)
                        }
                        </FormItem>
                         <FormItem>
                        {
                            getFieldDecorator('Pwd',{
                                initialValue:"",
                                rules:[{
                                    required:true,
                                    message:'密码也不能为空哦'
                                }]
                            })(<Input type="password" placeholder="请输入密码" />)
                        }
 
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    initialValue:true,
                                    valuePropName:'checked'
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="/" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                         <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>

            )
    }
}

export default Form.create()(FormLogin);