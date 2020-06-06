import React, {useState} from 'react';
import styled from 'styled-components';
import {sideNavTheme} from "../../../themes";
import {SIDE_NAV_CONFIG} from "./SideNavConfig";
import SignOutModal from "../../Auth/SignOut/SignOutModal";
import { Application, VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';

const SideNavContainer = styled(Application)`
    padding-top: 10px;
    background: black;    
    min-height: 100vh;
    width: 220px;
    font-weight: bold;
`;
SideNavContainer.displayName = "SideNavContainer";

const INITIAL_SELECTED_ITEM = "questions";

const SideNav = () => {
    const [selectedItem, setSelectedItem] = useState(INITIAL_SELECTED_ITEM);

    const renderMenu = () => {
        return (
            <VerticalNavigation
                selectedItem={selectedItem}
                onSelect={setSelectedItem}
            >
                <VerticalSection>
                    {Object.keys(SIDE_NAV_CONFIG).map((currentMenuItem) => {
                        const {icon, name, path, modal} = SIDE_NAV_CONFIG[currentMenuItem];
                        return(
                            modal ?
                                <SignOutModal 
                                    key={path} 
                                    name={name} 
                                    icon={icon} 
                                    path={path} 
                                />
                            : 
                                <VerticalItem
                                    key={path}
                                    name={name} 
                                    label={name}
                                    icon={icon}
                                    href={path}
                                />
                        )
                    })}
                </VerticalSection>
            </VerticalNavigation>
        )
    };

    return(
        <SideNavContainer theme={sideNavTheme}>
            {renderMenu()}
        </SideNavContainer>  
    )
};

export default SideNav;