import React from "react";
import styled from "styled-components";
import ComingSoonImg from "../../assets/ComingSoon.png";

const Container = styled.section`
    display: flex;
    margin: auto;
`;

const ComingSoon = () => {
    return (
        <Container>
            <img src={ComingSoonImg}  alt="Feature coming soon."/>
        </Container>
    )
}

export default ComingSoon; 