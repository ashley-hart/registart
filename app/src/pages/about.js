import React from "react";
import { P, Page, PageContainer, Title, Image } from "./PageComponents.js";
import picture from "../images/meagain.jpg";

const About = () => {
  return (
    <>
    <Page>
      <PageContainer>
          <Title>About Me</Title>
          <Image src={picture} />
          <P>
            Ashley is a student at the University of Florida. She enjoys
            writing, reading, art, and writing code!
          </P>
      </PageContainer>
    </Page>
    </>
  );
};

export default About;
