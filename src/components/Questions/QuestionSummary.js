import React from "react";
import styled from "styled-components";
import Rainbow from "../../assets/Rainbow.svg";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, ButtonIcon, Button } from 'react-rainbow-components';
import { faTasks, faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const iconContainerStyles = {
    width: '2.5rem',
    height: '2.5rem',
};

const CardContainer = styled.section`
    justify-content: center;  
    width: 90%; 
`;
CardContainer.displayName = "CardContainer";

const QuestionSummary = () => {

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

    const renderContent = () => {
        return(
            <section className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                <img
                    src={Rainbow}
                    alt="landscape with rainbows and colorful birds"
                />
                <h1 className="rainbow-p-top_large rainbow-font-size-heading_small">
                    No questions found
                </h1>
            </section>
        )
    };

    const renderFooter = () => {
        return(
            <section className="rainbow-align-content_space-between">
                <section className="rainbow-flex">
                    <ButtonIcon
                        icon={<FontAwesomeIcon icon={faHeart} />}
                        className="rainbow-m-right_xx-small"
                    />
                    <ButtonIcon icon={<FontAwesomeIcon icon={faShareAlt} />} />
                </section>
                <ButtonIcon icon={<FontAwesomeIcon icon={faAngleDown} />} />
            </section>
        )
    };

    const renderCard = () => {
        return(
            <Card
                icon={renderIcon()}
                title="Question X"
                actions={<Button variant="neutral" label="Edit" />}
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

export default QuestionSummary;