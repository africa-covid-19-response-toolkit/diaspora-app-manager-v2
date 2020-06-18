import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import DRAWER_CONFIG from "../../../configs/drawers";
import { Input } from "react-rainbow-components";

const FormContainer = styled.form`
    margin-top: 2.0vh;
    div > label {
        align-self: flex-start;
        padding-left: 1.0vh;
    }
`;

const EditTranslations = ({ questionActionSelected }) => {
    const { labels } = DRAWER_CONFIG.EDIT_LANGUAGE_DRAWER_CONFIG;
    const { type, style, className } = DRAWER_CONFIG
            .EDIT_LANGUAGE_DRAWER_CONFIG
            .inputProps;

    // TODO: Make questionActionSelected into object
    // that contains all translated strings. Refrained 
    // from this since no translations have been made.
    const [translations, setTranslations] = useState({
        eng: questionActionSelected, 
        arm: "", 
        orm: "", 
        tig: ""
    });

    const onEdit = (e, key) => {
        const edit = e ? e.target.value : "";
        setTranslations({
            ...translations, 
            key: edit
        });
    };

    return(
        <FormContainer key="edit-translations-form">
            {Object.keys(labels).map((currentLanguage) => {
                const {label, key } = labels[currentLanguage];
                return ( 
                    <Input
                        key={key}
                        type={type}
                        label={label}
                        style={style}
                        onChange={() => onEdit(key)}
                        className={className}
                        value={translations[key]}
                    />
                )
            })}
        </FormContainer>
    );
};

const mapStateToProps = state => {
    return { 
        questionActionSelected: state.questionActionSelected
    }
};

export default connect(mapStateToProps)(EditTranslations);