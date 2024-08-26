// Define styled components for the desk and computer using transient props ($zoomed)
import styled, {css} from "styled-components";

const Desk = styled.div<{ $zoomed: boolean, $fullScreen: boolean }>`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    position: relative;
    overflow: ${(props) => (props.$fullScreen ? "visible" : "hidden")}; /* Control overflow */
    transition: all 1s ease-in-out;

    ${(props) =>
            props.$zoomed &&
            css`
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: 10;
            `}
`;

const Computer = styled.div<{ $zoomed: boolean }>`
    width: ${(props) =>
            props.$zoomed ? "100vw" : "150px"}; /* Smaller size before loading */
    height: ${(props) =>
            props.$zoomed ? "100vh" : "100px"}; /* Smaller size before loading */
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: ${(props) =>
            props.$zoomed ? "0" : "10px"}; /* Rounded before zoom */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 1s ease-in-out;

    @media screen and (min-width: 768px) {
        width: ${(props) =>
                props.$zoomed ? "100vw" : "200px"}; /* Adjust size on larger screens */
        height: ${(props) =>
                props.$zoomed ? "100vh" : "150px"}; /* Adjust size on larger screens */
    }
`;

const Screen = styled.div<{ $fullScreen: boolean }>`
    width: ${(props) => (props.$fullScreen ? "100vw" : "90%")};
    height: ${(props) => (props.$fullScreen ? "100vh" : "90%")};
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: ${(props) => (props.$fullScreen ? "visible" : "hidden")};
    position: relative;
    transition: all 1s ease-in-out;
    border-radius: ${(props) => (props.$fullScreen ? "0" : "5px")};
`;

const BrowserWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: visible;
`;

export {
    Desk,
    Computer,
    Screen,
    BrowserWrapper
}