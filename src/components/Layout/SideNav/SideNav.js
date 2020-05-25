import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import {SIDE_NAV_CONFIG} from "./SideNavConfig";
import SignOutModal from "../../Auth/SignOut/SignOutModal";

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
            <Menu 
                theme="dark" 
                defaultSelectedKeys={['/']} 
                mode="inline"
            >
                {Object.keys(SIDE_NAV_CONFIG).map((currentMenuItem) => {
                    const {icon, name, path, modal} = SIDE_NAV_CONFIG[currentMenuItem];
                    return( 
                        modal ?
                           modal
                        : 
                            <Item key={path} icon={icon}>
                                <Link to={path}>
                                    {name}
                                </Link>
                            </Item>
                    )
                })}
            </Menu>
        )
    };

    return(
        <Sider 
            collapsible 
            collapsed={collapsed} 
            onCollapse={handleCollapse}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                top: 0,
                left: 0
            }}
        >
            {renderMenu()}
        </Sider>
    )
};

export default SideNav;