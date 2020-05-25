import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    MailOutlined,
    QuestionCircleOutlined,
    SettingOutlined,
    LogoutOutlined
  } from '@ant-design/icons';

const { Sider } = Layout;
const INITIAL_COLLAPSE_STATE = false;

const SideNav = () => {

    const [collapsed, setCollapsed] = useState(INITIAL_COLLAPSE_STATE);

    const handleCollapse = () => {
        setCollapsed(!collapsed)
    };

    const renderMenu = () => {
        return (
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<MailOutlined />}>
                    Messages
                </Menu.Item>
                <Menu.Item key="3" icon={<QuestionCircleOutlined />}>
                    Questions
                </Menu.Item>
                <Menu.Item key="4" icon={<SettingOutlined />}> 
                    Settings
                </Menu.Item>
                <Menu.Item key="5" icon={<LogoutOutlined />}> 
                    Sign out
                </Menu.Item>
            </Menu>
        )
    };

    return(
        <Layout style={{ minHeight: '100vh' }}>
            <div className="logo" />
             <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
                {renderMenu()}
             </Sider>
        </Layout>
    )
};

export default SideNav;