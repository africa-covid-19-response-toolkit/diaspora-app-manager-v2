import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import DRAWER_CONFIG from "../../../configs/drawers";
import { Drawer, Button } from "react-rainbow-components";

const FooterContainer = styled.section`
    display: flex;
    justify-content: space-between;
`;

const Subheader = styled.span`
    font-family: Lato;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.06;
    margin: 7px;
    display: block;
`;

const EditDrawer = ({ 
    editDrawerVisible, 
    questionSelected, 
    editDrawerType, 
    dispatch 
}) => {
    const { header, subheader, slideFrom, size } = DRAWER_CONFIG.EDIT_LANGUAGE_DRAWER_CONFIG;

    const getDrawerContent = () => {
        const { editTranslation, editNextQuestion } = DRAWER_CONFIG.DRAWER_TYPES;

        switch (editDrawerType) {
            case (editTranslation.type):
                return editTranslation.content;
            case (editNextQuestion.type): 
                return editNextQuestion.content;
            default: 
                console.log("Error: No drawer type");
        };
    };

    const renderSubheader = () => {
        return(
            <Subheader>
                {subheader}
            </Subheader>
        )
    }

    const handleClose = () => {
        dispatch({
            type: 'DISMISS_EDIT_ACTION_DRAWER',
            editDrawerVisible: false 
        });
    };

    const handleSave = () => {
        dispatch({
            type: 'SAVE_EDIT_ACTION_DRAWER',
            editDrawerVisible: false 
        });
    };

    const renderFooter = () => {
        return(
            <FooterContainer>
                <Button 
                    label="Cancel"
                    onClick={handleClose}
                />
                <Button 
                    label="Save"
                    variant="success"
                    onClick={handleSave}
                />
           </FooterContainer>
        )
    };

    return (
        <div className="rainbow-p-around_small rainbow-flex rainbow-flex_wrap  rainbow-align-content_center">
            <Drawer
                size={size}
                header={header}
                slideFrom={slideFrom}
                isOpen={editDrawerVisible}
                onRequestClose={handleClose}
                footer={renderFooter()}
            >
                {questionSelected ? renderSubheader() : null}
                {questionSelected ? getDrawerContent() : null}
            </Drawer>
      </div>
    )
}

const mapStateToProps = state => {
    return { 
        questionSelected: state.editDrawerVisible, 
        editDrawerType: state.editDrawerType, 
        editDrawerVisible: state.editDrawerVisible
    }
};


export default connect(mapStateToProps)(EditDrawer); 