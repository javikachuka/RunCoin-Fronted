import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import { Container } from "../../globalStyles";

import linkedinIcon from "../../images/linkedin.svg";
import githubIcon from "../../images/github.svg";
import heroImg from "../../images/heroImg.svg";

import {
  HeroSection,
  HeroRow,
  HeroColumn,
  TextWrapper,
  TopLine,
  Heading,
  HeroLinks,
  Icon,
  ImgWrapper,
  HeroImg,
  HeroLink,
} from "./Hero.elements";

function Hero() {
  let app = useRef(null);
  let image = useRef(null);
  let textContent = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    const topLine = textContent.children[0];
    const Headline = textContent.children[1];
    const Links = textContent.children[2];

    tl.from(image, { duration: 3, opacity: 0, ease: Power3.easeOut }, "Start");

    tl.staggerFrom(
      [topLine, Headline, Links],
      1,
      {
        opacity: 0,
        y: 30,
        ease: Power3.easeInOut,
        delay: 0,
      },
      0.15,
      "Start"
    );
  });

  return (
    <>
      <Container>
        <HeroSection ref={(el) => (app = el)}>
          <HeroRow>
            <HeroColumn>
              <TextWrapper ref={(el) => (textContent = el)}>
                <TopLine>DESARROLLADOR WEB</TopLine>
                <Heading>Matias Nuñez</Heading>
                <HeroLinks>
                  <HeroLink
                    href="https://www.linkedin.com/in/matias-enc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon src={linkedinIcon}></Icon>
                  </HeroLink>
                  <HeroLink
                    href="https://github.com/matias-enc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon src={githubIcon}></Icon>
                  </HeroLink>
                </HeroLinks>
              </TextWrapper>
            </HeroColumn>
            <HeroColumn>
              <ImgWrapper ref={(el) => (image = el)}>
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
