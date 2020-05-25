import React from "react";
import {
    HomeOutlined,
    MailOutlined,
    QuestionCircleOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const SCREEN_NAMES = {
    DASHBOARD: "Dashboard", 
    MESSAGES: "Messages", 
    QUESTIONS: "Questions", 
    SETTINGS: "Settings", 
    SIGN_OUT: "Sign out"
};
 
const SIDE_NAV_CONFIG = {
    DASHBOARD: {
        key: "1", 
        icon: <HomeOutlined />, 
        name: SCREEN_NAMES.DASHBOARD
    }, 
    MESSAGES: {
        key: "2", 
        icon: <MailOutlined />, 
        name: SCREEN_NAMES.MESSAGES
    },
    QUESTIONS: {
        key: "3", 
        icon: <QuestionCircleOutlined />, 
        name: SCREEN_NAMES.QUESTIONS
    }, 
    SETTINGS: {
        key: "4", 
        icon: <SettingOutlined />,
        name: SCREEN_NAMES.SETTINGS
    },
    SIGN_OUT: {
        key: "5", 
        icon: <LogoutOutlined />,
        name: SCREEN_NAMES.SIGN_OUT
    }
};

export {SCREEN_NAMES, SIDE_NAV_CONFIG};