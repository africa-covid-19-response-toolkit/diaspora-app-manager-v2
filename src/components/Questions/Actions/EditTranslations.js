import React from "react";
import DRAWER_CONFIG from "../../../configs/drawers";
import { Input } from "react-rainbow-components";

const EditTranslations = () => {
    const { labels } = DRAWER_CONFIG.EDIT_LANGUAGE_DRAWER_CONFIG;
    const { type, style, className } = DRAWER_CONFIG
            .EDIT_LANGUAGE_DRAWER_CONFIG
            .inputProps;

    return(
        <form key="edit-translations-form">
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
        </form>
    );
};

export default EditTranslations;