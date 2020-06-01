import React, {Component} from "react";
import { questionsTheme } from "../../themes";
import { Application } from 'react-rainbow-components';
import QuestionsCard from "./QuestionsCard";
import QuestionsList from "./QuestionsList";
import styled from "styled-components";

const QuestionsContainer = styled(Application)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
`;
QuestionsContainer.displayName = "QuestionsContainer";

class Questions extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <QuestionsContainer theme={questionsTheme}>
        <QuestionsCard />
        <QuestionsList />
      </QuestionsContainer>
    )
  }
}

export default Questions; 