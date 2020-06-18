import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import DRAWER_CONFIG from "../../../configs/drawers";
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
    dispatch
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

    const onEdit = currentAction => {
        const { editTranslation } = DRAWER_CONFIG.DRAWER_TYPES;
        dispatch({
            type: 'EDIT_QUESTION_ACTION',
            questionActionSelected: currentAction, 
            editDrawerType: editTranslation.type, 
            editDrawerVisible: true 
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
                            onClick={() => onEdit(currentAction)}
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
      questionSelected: state.questionSelected
    }
};

export default connect(mapStateToProps)(QuestionActions); 