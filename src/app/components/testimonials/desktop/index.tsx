import React from "react";
import { testimonies } from "@/app/modules/testimonials/testimonies";
import {
    Box,
    Typography,
    Avatar,
    Container,
    Grid
} from "@mui/material";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/app/components/shared/carousel/arrows";
import { CarouselContainer } from "@/app/components/testimonials/index.styles";

const TestimonialsDesktop: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Box
            sx={{
                maxWidth: "800px",
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
                                padding: 2,
                            }}
                        >
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} md={12}>
                                    <Box display="flex" alignItems="center">
                                        <Avatar
                                            src={testimonial.imagePath}
                                            alt={testimonial.name}
                                            sx={{ width: 150, height: 150, marginRight: 2 }}
                                        />
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6" fontWeight="bold" noWrap={false}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary" noWrap={false}>
                                                {testimonial.yearProgram}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Box mt={2}>
                                        <Typography variant="body1" mt={1}>
                                            {testimonial.message}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    ))}
                </Slider>
            </CarouselContainer>
        </Box>
    );
};

export default TestimonialsDesktop;
