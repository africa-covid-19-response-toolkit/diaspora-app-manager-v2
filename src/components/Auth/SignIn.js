import React, {Component} from 'react'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: "", 
      password: ""
    }
  }

  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <h1>SignIn</h1>
    );
  };
};

export default SignIn; 