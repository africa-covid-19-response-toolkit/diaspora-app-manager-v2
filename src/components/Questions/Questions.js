import React from "react";
import { questionsTheme } from "../../themes";
import { connect } from "react-redux";
import { Application, Notification } from 'react-rainbow-components';
import QuestionSummary from "./EditQuestionCard";
import QuestionsTable from "./QuestionsTable";
import EditActionDrawer from "./Actions/EditActionDrawer";
import styled from "styled-components";

const QuestionsContainer = styled(Application)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
`;
QuestionsContainer.displayName = "QuestionsContainer";

const Questions = ({ showSuccessToastMessage }) => {
    return (
      <QuestionsContainer theme={questionsTheme}>
        {showSuccessToastMessage && 
          <Notification
              title="Saved!"
              hideCloseButton={true}
              description="Your edits have been saved."
              icon="success"
          />
        }
        <EditActionDrawer />
        <QuestionSummary />
        <QuestionsTable />
      </QuestionsContainer>
    )
}

const mapStateToProps = state => {
  return { 
    authenticated: state.authenticated,
    showSuccessToastMessage: state.showSuccessToastMessage,
  }
};

export default connect(mapStateToProps)(Questions); 