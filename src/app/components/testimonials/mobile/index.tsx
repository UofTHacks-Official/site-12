import React from "react";
import {testimonies} from "@/app/modules/testimonials/testimonies";
import {
    Typography,
    Avatar,
    Container,
    Box
} from "@mui/material";
import Slider from "react-slick";
import {NextArrow, PrevArrow} from "@/app/components/shared/carousel/arrows";
import {
    CarouselContainer,
    CarouselDescription,
    CarouselHeader,
    CarouselSubHeader
} from "@/app/components/testimonials/index.styles";

const TestimonialsMobile: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    return (
        <Box
            sx={{
                position: "absolute",
                top: '30%',
                left: "50%",
                transform: "translateX(-50%)",
                maxWidth: "400px",
                padding: 2,
            }}
        >
            <CarouselContainer>
                <Slider {...settings}>
                    {testimonies.map((testimonial, index) => (
                        <Container
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <Avatar
                                    src={testimonial.imagePath}
                                    alt={testimonial.name}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        marginBottom: 1,
                                    }}
                                />
                            </Box>
                            <CarouselHeader isMobile>
                                {testimonial.name}
                            </CarouselHeader>
                            <CarouselSubHeader isMobile>
                                {testimonial.yearProgram}
                            </CarouselSubHeader>
                            <CarouselDescription isMobile>
                                {testimonial.message}
                            </CarouselDescription>
                        </Container>
                    ))}
                </Slider>
            </CarouselContainer>
        </Box>
    );

};

export default TestimonialsMobile;
