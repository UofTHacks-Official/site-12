import styled from "styled-components";

const Wrapper = styled.div`
    height: 65px;
    width: 65px;
`;

const Icon = styled.svg`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const Twitter = () => {
    return (
        <Wrapper>
            <Icon
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 54L28.871 35.129M28.871 35.129L10 9H22.5L36.129 27.871M28.871 35.129L42.5 54H55L36.129 27.871M55 9L36.129 27.871"
                    stroke="#225C90"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Icon>
        </Wrapper>
    );
};