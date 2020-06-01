import React, {Component} from "react";
import { Application } from 'react-rainbow-components';
import QuestionsCard from "./QuestionsCard";
import { questionCardTheme } from "../../themes";
import styled from "styled-components";

const QuestionsContainer = styled(Application)`
  display: flex;
  justify-content: center; 
  width: 100%;
  margin: auto;
`;

class Questions extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <QuestionsContainer theme={questionCardTheme}>
        <QuestionsCard />
      </QuestionsContainer>
    )
  }
}

export default Questions; 