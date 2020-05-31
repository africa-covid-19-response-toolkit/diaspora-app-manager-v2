import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { VerticalItem, Modal, Button } from 'react-rainbow-components';

class SignOutModal extends Component {
  constructor() {
    super()
    this.state = {
      visible: false, 
      redirect: false, 
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleConfirm = e => {
    console.log("Signing out");
    this.setState({
      visible: false,
      redirect: true
    });
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { redirect } = this.state;
    const {name, icon} = this.props;
    return(
      redirect ? 
        <Redirect to="/signed_out" />
      : 
      <Fragment>
        <VerticalItem
            name={name} 
            label={name}
            icon={icon}
            onClick={this.showModal}
        />
        <Modal   
          isOpen={this.state.visible}
          onRequestClose={this.handleCancel}
          title="Are you sure you want to exit?"
        >
          <section className="rainbow-flex rainbow-justify_end">
              <Button
                  className="rainbow-m-right_large"
                  label="No"
                  variant="destructive"
                  onClick={this.handleCancel}
              />
              <Button label="Yes" variant="success" onClick={this.handleConfirm} />
          </section>
            </Modal>
        </Fragment>
      )
  };
};

export default SignOutModal; 