import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Drawer, Button } from "react-rainbow-components";

const EditActionDrawer = ({ editActionDrawerVisible }) => {

    const renderForm = () => {
        console.log(editActionDrawerVisible);
        return(
            <form id="redux-form-id" noValidate >
                Content
            </form>
        )
    }

    const renderFooter = () => {
        return(
            <Fragment>
                <Button />
                <Button />
            </Fragment>
        )
    };

    return (
      <Drawer
        header="Edit action"
        slideFrom="right"
        isOpen={editActionDrawerVisible}
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