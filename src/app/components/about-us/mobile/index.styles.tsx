import styled from "styled-components";
import { ModuleBackground, ModuleContainer } from "@/app/components/shared/containers/index.styles";
import Image from "next/image";

const AboutUsModuleContainer = styled(ModuleContainer)`
  display: block;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  margin: 0 auto; 
`;

const LeftContainer = styled.div`
  max-width: auto;
  padding-right: 1rem;
  position: relative;

  h1 {
    letter-spacing: 0px;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #fff;
    text-align: left;
    line-height: 30px;

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
  position: relative;
`;

const Keys = styled(Image)`
  position: absolute;
  bottom: -120px; 
  left: 24%;
  transform: translateX(-50%);
  z-index: 1;
`;

const KeyHolder = styled(Image)`
  position: absolute;
  bottom: -45px; 
  left: 25%;
  transform: translateX(-50%);
  z-index: -1;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
  justify-content: center;
  align-items: flex-start; 
  padding-right: 1rem;

  & > :nth-child(1) {
    flex: 0 1 45%; 
    max-width: 45%; 
    align-self: flex-end;
  }

  & > :nth-child(2) {
    flex: 0 1 45%;
    max-width: 45%;
  }

  & > :nth-child(3) {
    flex: 1 1 100%;
    max-width: 100%; 
    margin-top: 10px;
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
  Keys,
  KeyHolder
};
