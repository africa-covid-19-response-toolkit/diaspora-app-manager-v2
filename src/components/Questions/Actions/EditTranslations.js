import React from "react";
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

const EditTranslations = () => {
    const { labels } = DRAWER_CONFIG.EDIT_LANGUAGE_DRAWER_CONFIG;
    const { type, style, className } = DRAWER_CONFIG
            .EDIT_LANGUAGE_DRAWER_CONFIG
            .inputProps;

    return(
        <FormContainer key="edit-translations-form">
            {Object.keys(labels).map((currentLanguage) => {
                const {label, key } = labels[currentLanguage];
                return ( 
                    <Input
                        key={key}
                        type={type}
                        style={style}
                        className={className}
                        label={label}
                    />
                )
            })}
        </FormContainer>
    );
};

export default EditTranslations;