import React from 'react';
import { Form, Input, Button } from 'antd';
import TermsAndConditions from "./TermsAndConditions";

const { Item } = Form; 

const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Please input a valid email.',
          },
          {
            required: true,
            message: 'Please input your e-mail.',
          },
        ]}
      >
        <Input />
      </Item>

      <Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password.',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Item>

      <Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password.',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match.');
            },
          }),
        ]}
      >
        <Input.Password />
      </Item>

      <Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Please accept the terms and agreement.'),
          },
        ]}
      >
        <TermsAndConditions />
      </Item>

      <Item >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Item>
      
    </Form>
  );
};

export default SignUp;