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
  padding-top: 10%;
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
  padding-left: ${({ mobile }) => (mobile ? "0" : "5vw")};
  padding-right: ${({ mobile }) => (mobile ? "0" : "5vw")};
  width: ${({ mobile }) => (mobile ? "95vw" : "min(80vw, 1040px)")};
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
    box-shadow: 0px 4px 15px rgba(34, 92, 144, 0.2);
    cursor: pointer;
  }
`;
const SponsorsButtons = styled.button`
  all: unset;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;

const SponsorsImageBackground2 = styled.div<{
  aspectRatio: number;
}>`
  width: 100%;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  background: linear-gradient(
    to right,
    rgba(255, 205, 247, 0.1),
    rgba(13, 174, 241, 0.1)
  );
  position: relative;
  border-radius: 2vw;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 2vw;
    padding: 2px;
    background: linear-gradient(to right, #0daef1, #ffcdf7);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
  }
`;

const SponsorsImageBackground = styled(Image)`
  width: 100%;
  height: auto;
  objectfit: cover;
  cursor: pointer;
`;
const SponsorsImageLogo = styled(Image)<{ mobile: boolean }>`
  position: absolute;
  top: ${({ mobile }) => (mobile ? "48%" : "48%")};
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  height: auto;
  z-index: 1;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
const SponsorsImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 2vh;
`;

const SponsorsContainer = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ mobile }) => (mobile ? "95vw" : "min(80vw, 1040px)")};
  height: auto;
  padding: 3% 0% 3% 0%;
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
  SponsorsImageBackground,
  SponsorsImageLogo,
  SponsorsImageContainer,
  SponsorsContainer,
  SponsorsRow,
  SponsorsModuleContainer,
  SponsorsDescription,
  SubmitButton,
  SponsorsDescContainer,
  SponsorsModuleBackground,
  SponsorsImageBackground2,
};
