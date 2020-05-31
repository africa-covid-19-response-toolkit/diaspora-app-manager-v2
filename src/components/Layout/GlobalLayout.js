import React, {Fragment} from 'react';
import SideNav from "./SideNav/SideNav";

const GlobalLayout = ({children}) => {
    return(
        <Fragment>
            <SideNav />
            {children}
        </Fragment>
    )
};

export default GlobalLayout; 