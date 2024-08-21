"use client";

import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

// Define styled components for the desk and computer using transient props ($zoomed)
const Desk = styled.div<{ $zoomed: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
  transition: all 1s ease-in-out;

  ${(props) =>
    props.$zoomed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 10;
      // background-color: #000;
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
  transition: all 1s ease-in-out; /* Smooth transition for size and radius change */

  @media screen and (min-width: 768px) {
    width: ${(props) =>
      props.$zoomed ? "100vw" : "200px"}; /* Adjust size on larger screens */
    height: ${(props) =>
      props.$zoomed ? "100vh" : "150px"}; /* Adjust size on larger screens */
  }
`;

const Screen = styled.div`
  font-size: 1.5rem;
  color: white;
`;

const ComputerOnDesk: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false); // Track if component has mounted

  useEffect(() => {
    // Wait until the component is mounted to show anything
    setIsMounted(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null; // Prevent any content from rendering on the server or before hydration
  }

  return (
    <Desk $zoomed={!isLoading}>
      <Computer $zoomed={!isLoading}>
        {isLoading ? (
          <Screen>Loading...</Screen>
        ) : (
          <Screen>Welcome Home!</Screen>
        )}
      </Computer>
    </Desk>
  );
};

export default ComputerOnDesk;
