import styled from "styled-components";

const CarouselContainer = styled.div`
  .slick-slide {
    padding: 10px;
    width: 100%;
    box-sizing: border-box; 
    overflow: hidden;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    display: flex;
  }

  .slick-arrow.slick-next,
  .slick-arrow.slick-prev {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
`;

export {
    CarouselContainer
}