import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  ImageBackgroundContainer,
  Title,
  NoteWrapper,
  ImageWrapper,
  Board,
  BackgroundGrid,
  BottomBook,
} from "@/app/modules/why-join/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const WhyJoinDesktop = () => (
  <ImageBackgroundContainer isMobile={false}>
    <Title isMobile={false}>
      <SpaceGrotesk style={{ fontSize: "60px" }}>Why join?</SpaceGrotesk>
    </Title>
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        zIndex: "10",
        maxWidth: "1400px",
      }}
    >
      {/* first row */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <NoteWrapper customHeight="200px">
            <p>
              Be part of a vibrant community of over 500 hackers from diverse
              schools, collaborating on exciting projects for 36+ hours of
              innovation.
            </p>
          </NoteWrapper>
        </Grid>
        <Grid item xs={12} md={5}>
          <ImageWrapper>
            <img src="/assets/why-join/Image.svg" alt="Group Photo" />
          </ImageWrapper>
        </Grid>
      </Grid>

      {/* second row */}
      <Grid
        container
        spacing={2}
        mt={1}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={5}>
          <ImageWrapper>
            <img src="/assets/why-join/Polaroid 1.svg" alt="Polaroid 1" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} md={4}>
          <NoteWrapper customHeight="150px">
            <p>
              Boost your skills with hands-on workshops and mentorship from
              industry professionals, helping you bring your ideas to life.
            </p>
          </NoteWrapper>
        </Grid>
      </Grid>

      {/* third row */}
      <Grid
        container
        spacing={2}
        mt={1}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <NoteWrapper customHeight="180px">
            <p>
              Network with top companies and industry leaders while creating
              something unique, all with the support of complimentary meals and
              snacks to keep you going.
            </p>
          </NoteWrapper>
        </Grid>
        <Grid item xs={12} md={5}>
          <ImageWrapper>
            <img src="/assets/why-join/Polaroid 2.svg" alt="Polaroid 2" />
          </ImageWrapper>
        </Grid>
      </Grid>
    </Box>
    <Board src="/assets/why-join/Board.svg" isMobile={false} />
    <BackgroundGrid src="/assets/why-join/grid.svg" />
    <BottomBook src="/assets/past-hackathons/book-bottom-left.svg" />
  </ImageBackgroundContainer>
);

export default WhyJoinDesktop;
