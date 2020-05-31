import React, { Component, Fragment } from "react";
import { Modal, Button } from 'react-rainbow-components';
import { Input } from 'react-rainbow-components';

const termsAndConditions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

class TermsAndConditions extends Component {
  state = {
    ModalText: termsAndConditions, 
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, ModalText } = this.state;
    return (
      <Fragment>
        <Input
          className="rainbow-m-around_medium"
          type="checkbox"
          error="This Field is Required"
          label="I have read the"
        />
        <Button variant="base" label="terms and conditions" onClick={this.showModal} />
        <Modal
          isOpen={visible}
          onRequestClose={this.handleCancel}
          title="Terms and Conditions"
        >
           <p>{ModalText}</p>
        </Modal>
      </Fragment>
    );
  }
}

export default TermsAndConditions;