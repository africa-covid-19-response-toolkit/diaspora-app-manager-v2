import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const buttonIconStyle = {
    marginLeft: "0.5rem", 
};

const ActionsContainer = styled.section`
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
    text-align: center;
`;
ActionsContainer.displayName = "ActionsContainer";

const PaddedContainer = styled.div`
    margin-top: 8px;
`;

const QuestionActions = ({ 
    questionSelected, 
    dispatch, 
    editActionDrawerVisible 
}) => {

    const filterActions = () => {
        if (questionSelected.multiple_choice) {
            return Object.values(questionSelected.multiple_choice).map((currentMC) => {
                return currentMC.text.eng;
            })
        } else {
            return Object.values(questionSelected.actions).map((currentActionKey) => {
                return currentActionKey.text.eng;
            })
        };
    };

    const onEdit = () => {
        dispatch({
            type: 'EDIT_QUESTION_ACTION',
            editActionDrawerVisible: true 
        });
    };

    const renderActions = () => {
        if (questionSelected) {
            const allActions = filterActions();
            return allActions.map((currentAction) => {
                return(
                    <PaddedContainer 
                        key={`${questionSelected.id}-${currentAction}`}
                    >
                         {currentAction}
                        <ButtonIcon 
                            key={currentAction}
                            title={currentAction}
                            variant="border" 
                            size="small" 
                            style={buttonIconStyle}
                            onClick={onEdit}
                            icon={<FontAwesomeIcon icon={faPencilAlt} />} 
                        /> 
                    </PaddedContainer>
                )
            })
        };
    };

    return (
      <ActionsContainer>
          {renderActions()}
      </ActionsContainer>
    );
};

const mapStateToProps = state => {
    return { 
      authenticated: state.authenticated,
      questions: state.questions,
      questionSelected: state.questionSelected, 
      editActionDrawerVisible: state.editActionDrawerVisible
    }
};

export default connect(mapStateToProps)(QuestionActions); 