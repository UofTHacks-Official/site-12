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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique accumsan.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis enim.</p>
            </NoteWrapper>
        </Row>

        {/* third row*/}
        <Row columns="1fr 1fr">
            <NoteWrapper column="1 / 2" customHeight="180px">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis enim.</p>
            </NoteWrapper>
            <ImageWrapper column="2 / 3">
                <img src="/assets/why-join/Polaroid 2.svg" alt="Polaroid 2" />
            </ImageWrapper>
        </Row>
        </WhyJoinModuleContainer>
    );
};

export default WhyJoin;
