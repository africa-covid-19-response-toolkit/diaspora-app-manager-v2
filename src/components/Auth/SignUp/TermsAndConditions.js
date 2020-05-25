import React, { Component, Fragment } from "react";
import { Modal, Button, Checkbox } from 'antd';
import styled from "styled-components";

const termsAndConditions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Link = styled(Button)`
  border: none !important;
  padding: 5px;
  color: #39b5fb; 
`;
Link.displayName = "Link";

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

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 500);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <Fragment>
        <Checkbox>
          I have read the 
          <Link onClick={this.showModal}> terms and conditions</Link>
        </Checkbox>
        <Modal
          title="Terms and Conditions"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </Fragment>
    );
  }
}

export default TermsAndConditions;