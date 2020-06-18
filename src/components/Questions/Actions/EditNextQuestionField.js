import React from "react";
import { Textarea } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const EditNextQuestionField = ({ questionSelected }) => {
    const { next } = questionSelected;
    return(
        <Textarea
            rows={5}
            value={next}
            style={containerStyles}
            label="Edit the Next Question"
            bottomHelpText="Edit the JSON logic used to retrieve the next question"
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
    );
};

export default EditNextQuestionField;