import React from "react";
import { testimonies } from "@/app/modules/testimonials/testimonies";
import { Box, Typography, Avatar, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/app/components/shared/carousel/arrows";
import {
  CarouselContainer,
  CarouselDescription,
  CarouselHeader,
  CarouselSubHeader,
} from "@/app/components/testimonials/index.styles";

const TestimonialsDesktop = () => {
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
        position: "relative",
        bottom: 0,
        maxWidth: "600px",
        height: "90%",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
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
                      <CarouselHeader>{testimonial.name}</CarouselHeader>
                      <CarouselSubHeader>
                        {testimonial.yearProgram}
                      </CarouselSubHeader>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box mt={2}>
                    <CarouselDescription>
                      {testimonial.message}
                    </CarouselDescription>
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
