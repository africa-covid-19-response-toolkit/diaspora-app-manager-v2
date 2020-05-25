import React, {Component} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Item } = Form;

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: "", 
      password: ""
    }
  }

  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
      >
        <Item
          name="username"
          rules={[{ required: true, message: 'Please input your username.' }]}
        > Username
          <Input prefix={<UserOutlined />} placeholder="Enter your username" />
        </Item>
        <Item
          name="password"
          rules={[{ required: true, message: 'Please input your password.' }]}
        >
          Password
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter your password"
          />
        </Item>
        <Item>
          <Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Item>
          <br/>
          <Link to="/forgot_password">
            Forgot password?
          </Link>
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <br/>
          Or <Link to="/sign_up">
            register now!
          </Link>
        </Item>
      </Form>
    );
  };
};

export default SignIn; 