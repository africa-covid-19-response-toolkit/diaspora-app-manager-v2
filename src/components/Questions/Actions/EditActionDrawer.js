import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Drawer, Button } from "react-rainbow-components";

const FooterContainer = styled.section`
    display: flex;
    justify-content: space-between;
`;

const EditActionDrawer = ({ editActionDrawerVisible, dispatch }) => {

    const renderForm = () => {
        console.log(editActionDrawerVisible);
        return(
            <form id="redux-form-id" noValidate >
                Content
            </form>
        )
    }

    const handleClose = () => {
        dispatch({
            type: 'DISMISS_EDIT_ACTION_DRAWER',
            editActionDrawerVisible: false 
        });
    }

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
                />
           </FooterContainer>
        )
    };

    return (
      <Drawer
        header="Edit action"
        slideFrom="right"
        isOpen={editActionDrawerVisible}
        onRequestClose={handleClose}
        footer={renderFooter()}
      >
          {renderForm()}
      </Drawer>

    )
}

const mapStateToProps = state => {
    return { 
        editActionDrawerVisible: state.editActionDrawerVisible
    }
};


export default connect(mapStateToProps)(EditActionDrawer); 