import React from "react";
import EditTranslations from "../components/Questions/Actions/EditTranslations";
import EditNextQuestionField from "../components/Questions/Actions/EditNextQuestionField";

const INPUT_CONFIG = {
    type: "text",  
    className: "rainbow-p-around_medium"
};

const EDIT_LANGUAGE_DRAWER_CONFIG = {
    labels: {
        ENGLISH: {
            label: "English", 
            key: "eng"
        }, 
        AMHARIC: {
            label: "Amharic", 
            key: "amh"
        }, 
        OROMO: {
            label: "Oromo", 
            key: "orm"
        }, 
        TIGRINYA: {
            label: "Tigrinya", 
            key: "tig"
        }, 
    },
    inputProps: {
        ...INPUT_CONFIG
    },
    header: "Edit action",
    subheader: "Edit and translate the following actions.", 
    slideFrom: "right", 
    size: "small"
};

const TEXTAREA_CONFIG = {
    rows: 5, 
    style: { maxWidth: 500 }, 
    className: "rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
};

const EDIT_NEXT_QUESTION_DRAWER_CONFIG = {
    textareaProps: {
        ...TEXTAREA_CONFIG
    }, 
    header: "Edit the next question", 
    subheader: "Edit the JSON logic used to retrieve the next question", 
    slideFrom: "right", 
    size: "small"
};

const DRAWER_TYPES = {
    editTranslation: {
        type: "editTranslation", 
        content: <EditTranslations />
    },  
    editNextQuestion: {
        type: "editNextQuestion", 
        content: <EditNextQuestionField />
    }
};

const DRAWER_CONFIG = {
    DRAWER_TYPES, 
    EDIT_LANGUAGE_DRAWER_CONFIG, 
    EDIT_NEXT_QUESTION_DRAWER_CONFIG
};

export default DRAWER_CONFIG;