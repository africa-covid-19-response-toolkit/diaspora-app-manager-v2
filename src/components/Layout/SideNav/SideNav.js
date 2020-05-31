import React, {useState} from 'react';
import styled from 'styled-components';
import {SIDE_NAV_CONFIG} from "./SideNavConfig";
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import SignOutModal from "../../Auth/SignOut/SignOutModal";

const SideNavContainer = styled.section`
    padding-top: 10px;
    background: black;    
    min-height: 100vh;
    width: 220px;
    font-weight: bold;
`;
SideNavContainer.displayName = "SideNavContainer";

const INITIAL_SELECTED_ITEM = "dashboard";

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
                                <SignOutModal name={name} icon={icon} path={path} />
                            : 
                                <VerticalItem
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
        <SideNavContainer>
            {renderMenu()}
        </SideNavContainer>  
    )
};

export default SideNav;