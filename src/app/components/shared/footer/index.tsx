import styled from "styled-components";
import {
    Instagram,
    LinkedIn,
    Twitter,
} from "./footer-icons";

const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    position: absolute;
    bottom: 10vh;
    left: 11vw;
`;

const Icon = styled.a`
    &:hover {
        cursor: pointer;
        transition: 0.3s ease-out all;
    }
`;

const SocialsContainer = () => {
    return (
        <Socials>
            <Icon
                href="https://www.instagram.com/uofthacks"
                target="_blank"
                rel="noopener"
            >
                <Instagram/>
            </Icon>
            <Icon
                href="https://www.twitter.com/uofthacks"
                target="_blank"
                rel="noopener"
            >
                <Twitter/>
            </Icon>
            <Icon
                href="https://www.linkedin.com/company/uoftorontohacks"
                target="_blank"
                rel="noopener"
            >
                <LinkedIn/>
            </Icon>
        </Socials>
    );
};

export default SocialsContainer;