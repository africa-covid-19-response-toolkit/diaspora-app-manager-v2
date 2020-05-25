import React from 'react';
import { Layout } from "antd";
import SideNav from "./SideNav/SideNav";
import GlobalContent from "./GlobalContent";

const GlobalLayout = ({children}) => {
    return(
        <Layout style={{ minHeight: "100vh"}}>
            <SideNav />
            <Layout>
                <GlobalContent>{children}</GlobalContent>
            </Layout>
        </Layout>
    )
};

export default GlobalLayout; 