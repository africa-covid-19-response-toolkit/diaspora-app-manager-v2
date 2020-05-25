import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Modal, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import styled from "styled-components";

const MenuButton = styled(Button)`
  margin-left: 10px;
  color: #afb6bb; 
  :hover {
    color: red !important;
  }
`;

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

  handleOk = e => {
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
    return(
      redirect ? 
        <Redirect to="/signed_out" />
      : 
        <Fragment>
          <MenuButton type="link" icon={<LogoutOutlined />} onClick={this.showModal}>
            Sign out
          </MenuButton>
          <Modal
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
          >
            Are you sure you want to sign out?
          </Modal>
        </Fragment>
      )
  };
};

export default SignOutModal; 