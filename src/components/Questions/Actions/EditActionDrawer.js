import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Drawer, Button, Input } from "react-rainbow-components";

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

const inputStyles = {
    width: 300,
};

const EditActionDrawer = ({ 
    editActionDrawerVisible, 
    questionSelected, 
    dispatch 
}) => {

    const renderForm = () => {
        return(
            <form>
                <Input
                    label="English"
                    type="text"
                    className="rainbow-p-around_medium"
                    style={inputStyles}
                />
                <Input
                    label="Amharic"
                    type="text"
                    className="rainbow-p-around_medium"
                    style={inputStyles}
                />
                <Input
                    label="Oromo"
                    type="text"
                    className="rainbow-p-around_medium"
                    style={inputStyles}
                />
                <Input
                    label="Tigriyna"
                    type="text"
                    className="rainbow-p-around_medium"
                    style={inputStyles}
                />
            </form>
        )
    };

    const renderHeader = () => {
        return(
            <Subheader>
                Edit and translate the following actions.
            </Subheader>
        )
    }

    const handleClose = () => {
        dispatch({
            type: 'DISMISS_EDIT_ACTION_DRAWER',
            editActionDrawerVisible: false 
        });
    };

    const handleSave = () => {
        dispatch({
            type: 'SAVE_EDIT_ACTION_DRAWER',
            editActionDrawerVisible: false 
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
            `<Drawer
                header="Edit action"
                slideFrom="right"
                isOpen={editActionDrawerVisible}
                onRequestClose={handleClose}
                footer={renderFooter()}
            >
                {questionSelected ? renderHeader() : null}
                {questionSelected ? renderForm() : null}
            </Drawer>`
      </div>
    )
}

const mapStateToProps = state => {
    return { 
        questionSelected: state.editActionDrawerVisible, 
        editActionDrawerVisible: state.editActionDrawerVisible
    }
};


export default connect(mapStateToProps)(EditActionDrawer); 