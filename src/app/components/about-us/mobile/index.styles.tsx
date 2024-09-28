import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";
import Image from "next/image";

const AboutUsModuleContainer = styled(ModuleContainer)`
  display:  "block";
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  margin: 0 auto; 
`;

const LeftContainer = styled.div`
  max-width: auto;
  padding-right: 2vw;
  padding-left: 2vw;
  position: relative;

  h1 {
    letter-spacing: 0px;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #fff;
    text-align: left;
    line-height: 20px;

    .highlight {
      position: relative;
      display: inline-block;
    }
  }
`;

const AboutGraphic = styled(Image)`
  position: absolute;
  visibility: hidden;
  top: -15px;
  left: 400px;
  transform: translateY(-30%);
`;

const AboutUsDescription = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  font-size: 16px;
  text-align: left;
  letter-spacing: 0px;
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  position: relative;
  padding-right: 0;

  & > :nth-child(1) {
    grid-column: 2 / 3;
    align-self: end;
  }

  & > :nth-child(2) {
    grid-column: 1 / 3;
  }

  & > :nth-child(3) {
    border: 2px soli red;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: start;
    align-self: end;
    margin-left: 0px;
  }

  & > :nth-child(4) {
    position: absolute;
    bottom: 70%;
    left: 50%;
    margin-left: -110px;
    align-self: center;
  }
  
  & > :nth-child(5) {
    position: absolute;
    bottom: 85%;
    left: 50%;
    margin-left: -110px;
    align-self: center;
  }
`;

const StyledImage = styled(Image)`
  display: block;
  border: 10px solid #fff;
  border-radius: 4px;
  object-fit: cover;
  margin: 8px;
`;

export {
  AboutUsModuleContainer,
  LeftContainer,
  AboutUsDescription,
  AboutGraphic,
  ImagesContainer,
  StyledImage,
};
