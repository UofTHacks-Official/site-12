import {
  FAQModuleContainer,
  FAQModuleBackground,
  FAQContainer,
} from "@/app/modules/faq/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Accordion from "@/app/components/pages/Accordion";

const FAQItems = [
  {
    title: "What is UofTHacks?",
    content:
      "UofTHacks is the University of Toronto's annual hackathon. It is a 36-hour event where students from all over the world come together to create innovative projects.",
  },
  {
    title: "When is UofTHacks?",
    content:
      "UofTHacks 12 will be held from January 14th to January 16th, 2025.",
  },
  {
    title: "Where is UofTHacks?",
    content:
      "UofTHacks 12 will be held virtually. Participants can join from anywhere in the world.",
  },
  {
    title: "Who can participate?",
    content:
      "UofTHacks is open to all undergraduate and graduate students, regardless of their level of experience.",
  },
  {
    title: "How much does it cost to attend?",
    content: "UofTHacks is free for all participants.",
  },
  {
    title: "How can I sponsor UofTHacks?",
    content:
      "If you are interested in sponsoring UofTHacks, please contact us at",
  },
];

const FAQ = () => {
  return (
    <FAQModuleContainer id="FAQ-module">
      <FAQModuleBackground src="/background/faq.svg" />
      <FAQContainer>
        <SpaceGrotesk
          style={{
            textAlign: "start",
            fontSize: "3.75rem",
            letterSpacing: "0rem",
          }}
        >
          {"FAQ"}
        </SpaceGrotesk>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {FAQItems.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </FAQContainer>
    </FAQModuleContainer>
  );
};

export default FAQ;
