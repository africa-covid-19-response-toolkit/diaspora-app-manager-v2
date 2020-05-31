import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faQuestion, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SCREEN_NAMES = {
    DASHBOARD: "Dashboard", 
    MESSAGES: "Messages", 
    QUESTIONS: "Questions", 
    SETTINGS: "Settings", 
    SIGN_OUT: "Sign out"
};
 
const SIDE_NAV_CONFIG = {
    DASHBOARD: {
        icon: <FontAwesomeIcon icon={faHome} />, 
        name: SCREEN_NAMES.DASHBOARD, 
        path: "/dashboard"
    }, 
    MESSAGES: {
        icon:<FontAwesomeIcon icon={faComment} />,
        name: SCREEN_NAMES.MESSAGES,
        path: "/messages"
    },
    QUESTIONS: {
        icon: <FontAwesomeIcon icon={faQuestion} />, 
        name: SCREEN_NAMES.QUESTIONS, 
        path: "/questions"
    }, 
    SETTINGS: {
        icon: <FontAwesomeIcon icon={faCog} />,
        name: SCREEN_NAMES.SETTINGS, 
        path: "/settings"
    },
    SIGN_OUT: {
        icon: <FontAwesomeIcon icon={faSignOutAlt} />,
        name: SCREEN_NAMES.SIGN_OUT, 
        path: "/signed_out"
    }
};

export {SCREEN_NAMES, SIDE_NAV_CONFIG};