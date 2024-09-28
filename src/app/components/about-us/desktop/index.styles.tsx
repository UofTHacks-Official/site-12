import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";
import Image from "next/image";


const AboutUsModuleContainer = styled(ModuleContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: relative;
  margin: 0 auto; 
`;

const LeftContainer = styled.div`
  max-width: 50vw;
  padding-right: 3vw;
  padding-left: 2vw;
  position: relative;

  h1 {
    letter-spacing: 0px;
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #fff;
    text-align: left;
    line-height: 60px;

    .highlight {
      position: relative;
      display: inline-block;
    }
  }
`;

const AboutGraphic = styled(Image)`
  position: absolute;
  top: -15px;
  left: 400px;
  transform: translateY(-30%);
`;

const AboutUsDescription = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  font-size: 16px;
  text-align: left;
  letter-spacing: 0px;
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  position: relative;
  padding-right: 2vw;

  & > :nth-child(1) {
    grid-column: 1 / 2;
    align-self: center;
  }

  & > :nth-child(2) {
    grid-column: 2 / 3;
  }

  & > :nth-child(3) {
    grid-column: 1 / 3;
    justify-self: center;
    margin-left: -40px;
  }

  & > :nth-child(4) {
    position: absolute;
    bottom: 5%;
    left: 100%;
    margin-left: -110px;
    align-self: center;
  }
  
  & > :nth-child(5) {
    visibility: hidden;
    position: absolute;
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
