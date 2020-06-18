import React from "react";
import { connect } from "react-redux";
import { Textarea } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const EditNextQuestionField = ({ questionSelected }) => {
    const { next } = questionSelected;
    const nextJson = JSON.parse(next);

    const prettifyJson = () => JSON.stringify(nextJson, undefined, 4);

    return(
        <Textarea
            rows={5}
            value={prettifyJson()}
            style={containerStyles}
            label="Edit the Next Question"
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
    );
};

const mapStateToProps = state => {
    return { 
      questionSelected: state.questionSelected
    }
};

export default connect(mapStateToProps)(EditNextQuestionField);