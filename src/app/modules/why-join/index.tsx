import { WhyJoinModuleBackground, WhyJoinModuleContainer, NoteWrapper, ImageWrapper, Title, Row } from "@/app/modules/why-join/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const WhyJoin = () => {
    return (
        <WhyJoinModuleContainer id="WhyJoin-module">
            <WhyJoinModuleBackground src="/background/why-join.svg" />

        <Title>
            <SpaceGrotesk style={{ fontSize: "60px" }}>Why join?</SpaceGrotesk>
        </Title>

        {/* first row */}
        <Row columns="1fr 1.5fr">
            <NoteWrapper column="1 / 2" customHeight="200px">
                <p>Be part of a vibrant community of over 500 hackers from diverse schools, collaborating on exciting projects for 36+ hours of innovation.</p>
            </NoteWrapper>
            <ImageWrapper column="2 / 3">
                <img src="/assets/why-join/Image.svg" alt="Group Photo" />
            </ImageWrapper>
        </Row>


        {/* second row */}
        <Row columns="1.5fr 1fr">
            <ImageWrapper column="1 / 2">
                <img src="/assets/why-join/Polaroid 1.svg" alt="Polaroid 1" />
            </ImageWrapper>
            <NoteWrapper column="2 / 3" customHeight="150px">
                <p>Boost your skills with hands-on workshops and mentorship from industry professionals, helping you bring your ideas to life.</p>
            </NoteWrapper>
        </Row>

        {/* third row*/}
        <Row columns="1fr 1fr">
            <NoteWrapper column="1 / 2" customHeight="180px">
                <p>Network with top companies and industry leaders while creating something unique, all with the support of complimentary meals and snacks to keep you going.</p>
            </NoteWrapper>
            <ImageWrapper column="2 / 3">
                <img src="/assets/why-join/Polaroid 2.svg" alt="Polaroid 2" />
            </ImageWrapper>
        </Row>
        </WhyJoinModuleContainer>
    );
};

export default WhyJoin;
