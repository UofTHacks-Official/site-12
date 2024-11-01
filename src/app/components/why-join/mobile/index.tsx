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
} from "@/app/modules/why-join/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Image from 'next/image'

const WhyJoinMobile = () => (
  <ImageBackgroundContainer isMobile={true}>
    <div
      style={{
        zIndex: "10",
        width: "min(90%, 650px)",
        margin: "0 auto", height: "100%",
      }}
    >
      <Title isMobile={true}>
        <SpaceGrotesk style={{ fontSize: "40px" }}>Why join?</SpaceGrotesk>
      </Title>

      <Box sx={{ flexGrow: 1, width: "100%", zIndex: 10 }}>
        {/* first row */}
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <NoteWrapper>
                Be part of a vibrant community of over 500 hackers from diverse
                schools, collaborating on exciting projects for 36+ hours of
                innovation.
            </NoteWrapper>
          </Grid>
          <Grid item xs={12}>
            <ImageWrapper>
              <Image
                src="/assets/why-join/mobile-photo-1.png"
                alt="Group Photo"
                width="1000" height="165"
                quality={100}
              />
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
          <Grid item xs={12}>
            <NoteWrapper>
                Boost your skills with hands-on workshops and mentorship from
                industry professionals, helping you bring your ideas to life.
            </NoteWrapper>
          </Grid>
          <Grid item xs={12}>
            <ImageWrapper>
              <Image src="/assets/why-join/mobile-photo-2.png" alt="Polaroid 1" width="1290" height="145" quality={100}/>
            </ImageWrapper>
          </Grid>
        </Grid>

        {/* third row */}
        {/* <Grid
        container
        spacing={2}
        mt={1}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={8}>
          <ImageWrapper isMobile={true}>
            <img src="/assets/why-join/Polaroid 2.svg" alt="Polaroid 2" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12}>
          <NoteWrapper customHeight="150px">
            <p>
              Network with top companies and industry leaders while creating
              something unique, all with the support of complimentary meals and
              snacks to keep you going.
            </p>
          </NoteWrapper>
        </Grid>
      </Grid> */}
      </Box>
    </div>
      <Board src="/assets/why-join/Board.svg" isMobile={true} alt="board"/>
      <BackgroundGrid src="/assets/why-join/grid.svg" alt="background" layout="fill" width={undefined} height={undefined}/>
  </ImageBackgroundContainer>
);

export default WhyJoinMobile;
