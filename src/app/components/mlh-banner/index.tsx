import { MLHContainer, MLHWrapper } from "./index.styles";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";

const MLHBanner = () => {
  const isMobile = useMobileDetect();
  return (
      <MLHContainer
          id="mlh-trust-badge"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=blue"
          target="_blank"
          isMobile={isMobile}
      >
        <MLHWrapper src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-blue.svg" alt="mlh wrapper" width={100} height={100}/>
      </MLHContainer>
  );
};

export default MLHBanner;
