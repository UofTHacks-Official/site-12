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
import {CarouselContainer} from "@/app/components/testimonials/index.styles";

const TestimonialsMobile: React.FC = () => {
    const settings = {
        dots: true,
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
                maxWidth: "300px",
                margin: "0 auto",
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
                            <Avatar
                                src={testimonial.imagePath}
                                alt={testimonial.name}
                                sx={{width: 100, height: 100, marginBottom: 1}}
                            />
                            <Typography variant="h6" fontWeight="bold" textAlign="left">
                                {testimonial.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" textAlign="left">
                                {testimonial.yearProgram}
                            </Typography>
                            <Typography variant="body1" mt={1} textAlign="center">
                                {testimonial.message}
                            </Typography>
                        </Container>
                    ))}
                </Slider>
            </CarouselContainer>
        </Box>
    );
};

export default TestimonialsMobile;
