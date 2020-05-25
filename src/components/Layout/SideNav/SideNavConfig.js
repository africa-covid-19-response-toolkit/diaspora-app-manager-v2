import React from "react";
import {
    HomeOutlined,
    MailOutlined,
    QuestionCircleOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const SideNavConfig = {
    DASHBOARD: {
        key: "1", 
        icon: <HomeOutlined />, 
        name: "Dashboard"
    }, 
    MESSAGES: {
        key: "2", 
        icon: <MailOutlined />, 
        name: "Messages"
    },
    QUESTIONS: {
        key: "3", 
        icon: <QuestionCircleOutlined />, 
        name: "Questions"
    }, 
    SETTINGS: {
        key: "4", 
        icon: <SettingOutlined />,
        name: "Settings"
    },
    SIGN_OUT: {
        key: "5", 
        icon: <LogoutOutlined />,
        name: "Sign out"
    }
};

export default SideNavConfig;