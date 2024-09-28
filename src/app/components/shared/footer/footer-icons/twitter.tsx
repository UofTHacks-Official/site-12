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
                    d="M5.83301 53.3337C10.6132 56.0563 16.1626 57.3337 22.083 57.3337C39.633 57.3337 53.9384 43.635 54.5613 26.5017L59.9997 16.0003L50.9159 17.3337C48.9368 15.6151 46.3886 14.6668 43.7497 14.667C36.7838 14.667 31.5622 21.379 33.2413 27.947C23.6213 28.5603 14.9032 22.723 9.8603 14.947C6.5128 26.139 9.61655 39.6163 18.0205 47.923C18.0205 51.059 9.89551 52.931 5.83301 53.3337Z"
                    stroke="#225C90" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            </Icon>
        </Wrapper>
    );
};
