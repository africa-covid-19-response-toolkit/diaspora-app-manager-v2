import React from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SIGN_IN_CONFIG = {
    USERNAME: {
        name: "username", 
        rules: [{ required: true, message: 'Please input a username.' }], 
        prefixIcon: <UserOutlined />, 
        placeholder: "Username"
    }, 
    PASSWORD: {
        name: "password",
        rules: [{ required: true, message: 'Please input your Password!' }], 
        prefixIcon: <LockOutlined />,
        type: "password", 
        placeholder: "Password"
    }, 
    REMEMBER_ME: {
        name: "remember", 
        
    }
}

export {SIGN_IN_CONFIG}