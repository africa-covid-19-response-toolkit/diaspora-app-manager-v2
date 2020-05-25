import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import SideNavConfig from "./SideNavConfig";

const { Item } = Menu; 
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
                {Object.keys(SideNavConfig).map((currentMenuItem) => {
                    const {key, icon, name} = SideNavConfig[currentMenuItem];
                    return (
                    <Item key={key} icon={icon}>
                        {name}
                    </Item>
                    )
                })}
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