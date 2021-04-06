import React from "react";
import { Container } from "../../../globalStyles";

import workImg from "../../../images/runcoin-work-img.svg";

import {
  WorkSection,
  WorkRow,
  WorkColumn,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrapper,
  WorkImg,
} from "./Work.elements";

function Work() {
  return (
    <>
      <Container>
        <WorkSection id="work">
          <WorkRow>
            <WorkColumn>
              <TextWrapper>
                <Heading>
                  How it
                  <span className="text-blue"> Works!</span>
                </Heading>
                <TopLine>
                  The game is simple, try to be the last person to bid for the
                  prize before the countdown ends.
                </TopLine>
              </TextWrapper>
            </WorkColumn>
            <WorkColumn>
              <ImgWrapper>
                <WorkImg src={workImg}></WorkImg>
              </ImgWrapper>
            </WorkColumn>
          </WorkRow>
        </WorkSection>
      </Container>
    </>
  );
}

export default Work;
