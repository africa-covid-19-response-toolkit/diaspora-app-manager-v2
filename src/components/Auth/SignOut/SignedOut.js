import React from "react";
import { Result } from 'antd';

const SignedOut = () => {
    return(
        <Result
            status="success"
            title="You've successfully logged out."
        />
    );
};

export default SignedOut; 