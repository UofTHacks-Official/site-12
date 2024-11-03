import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";
import Image from "next/image";

const SponsorsModuleContainer = styled(ModuleContainer)`
  min-height: 600px;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: auto;
  background: #fefbfe;
`;

const SponsorsModuleBackground = styled(ModuleBackground)`
  z-index: -1;
`;
const SponsorsDescription = styled.div<{ mobile: boolean }>`
  margin-top: 2%;
  margin-bottom: 2%;
  text-align: ${({ mobile }) => (mobile ? "left" : "center")};
`;

const SponsorsDescContainer = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ mobile }) => (mobile ? "80vw" : "70vw")};
  align-items: ${({ mobile }) => (mobile ? "flex-start" : "center")};
`;

const SubmitButton = styled.button<{ mobile: boolean }>`
  border-radius: 8px;
  border: 0px;
  color: white;
  background: #225c90;
  width: ${({ mobile }) => (mobile ? "180px" : "170px")};
  height: 40px;
  transition: background 0.3s ease;
  margin-top: 3%;
  margin-bottom: 3%;

  &:hover {
    background: #1a4871;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
const SponsorsButtons = styled.button`
  all: unset;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;

const SponsorsImage = styled(Image)`
  width: 100%;
  height: auto;
  objectfit: cover;
  margin-bottom: 2vh;
`;
const SponsorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  padding: 3% 10% 10% 10%;
`;

const SponsorsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SponsorsColumn = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
`;

export {
  SponsorsButtons,
  SponsorsColumn,
  SponsorsImage,
  SponsorsContainer,
  SponsorsRow,
  SponsorsModuleContainer,
  SponsorsDescription,
  SubmitButton,
  SponsorsDescContainer,
  SponsorsModuleBackground,
};
