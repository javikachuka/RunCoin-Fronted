import React from "react";
import { Container } from "../../../globalStyles";

import heroImg from "../../../images/runcoin-hero-img.svg";

import {
  HeroSection,
  HeroRow,
  HeroColumn,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrapper,
  HeroImg,
} from "./Hero.elements";

function Hero() {
  return (
    <>
      <Container>
        <HeroSection>
          <HeroRow>
            <HeroColumn>
              <TextWrapper>
                <Heading>
                  Run coin is a{" "}
                  <span className="text-blue">Descentralized Game</span>
                </Heading>
                <TopLine>
                  A ver si nos ponemos a laburar un poco xd laconcha de la lroa
                </TopLine>
              </TextWrapper>
            </HeroColumn>
            <HeroColumn>
              <ImgWrapper>
                <HeroImg src={heroImg}></HeroImg>
              </ImgWrapper>
            </HeroColumn>
          </HeroRow>
        </HeroSection>
      </Container>
    </>
  );
}

export default Hero;
