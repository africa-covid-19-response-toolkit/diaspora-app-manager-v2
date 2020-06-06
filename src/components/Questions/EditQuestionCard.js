import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Rainbow from "../../assets/Rainbow.svg";
import QuestionActions from "./Actions/QuestionActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button, Input } from 'react-rainbow-components';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const iconContainerStyles = {
    width: '2.5rem',
    height: '2.5rem',
};

const containerStyles = {
    maxWidth: 1000,
};

const CardContainer = styled.section`
    justify-content: center;  
    width: 90%;
`;
CardContainer.displayName = "CardContainer";

const QuestionSummary = ({ questionSelected, dispatch }) => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        const selectedQuestion = questionSelected ? questionSelected.text.eng : null;
        setQuestion(selectedQuestion);
    }, [questionSelected]);

    const renderIcon = () => {
        return(
            <span
                className="rainbow-background-color_success rainbow-border-radius_circle rainbow-align-content_center"
                style={iconContainerStyles}
            >
                <FontAwesomeIcon icon={faTasks} size="lg" className="rainbow-color_white" />
            </span>
        )
    };
    
    const renderZeroState = () => {
        return(
            <section className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                <img
                    src={Rainbow}
                    alt="landscape with rainbows and colorful birds"
                />
                <h1 className="rainbow-p-top_large rainbow-font-size-heading_small">
                    No question selected
                </h1>
            </section>
        )
    };

    const onEdit = (e) => {
        const editedQuestion = e.target.value;
        setQuestion(editedQuestion);
    };

    const onSave = () => {
        dispatch({
            type: 'SAVE_EDIT',
            rowNum: questionSelected.rowNum, 
            updatedQuestion: {
                ...questionSelected, 
                text: {
                    eng: question
                }
            }
        })
    };

    const renderQuestion = () => {
        return(
            <Fragment>
                <section className="rainbow-align-content_center rainbow-flex_wrap">
                    <Input 
                        label="Edit the question"
                        isCentered
                        onChange={onEdit}
                        style={containerStyles}
                        value={question || ""}
                        bottomHelpText="ex: How many people have you been in contact with in the past 24 hours?"
                    />
                </section>
                <QuestionActions />
            </Fragment>
        )
    };

    const renderContent = () => {
        return questionSelected ? renderQuestion() : renderZeroState();
    };

    const renderFooter = () => {
        const disabled = questionSelected ? false : true; 
        return(
            <Button
                disabled={disabled}
                label="Save"
                variant="success"
                onClick={onSave} 
            />
        )
    };

    const renderCard = () => {
        return(
            <Card
                icon={renderIcon()}
                title={questionSelected ? `Question ${questionSelected.id}` : "Question"}
                footer={renderFooter()}
            >
                {renderContent()}
            </Card>
        )
    }

    return(
        <CardContainer>
            {renderCard()}
        </CardContainer>
    )
}

const mapStateToProps = state => {
    return { 
      authenticated: state.authenticated,
      questions: state.questions,
      questionSelected: state.questionSelected
    }
};

export default connect(mapStateToProps)(QuestionSummary);