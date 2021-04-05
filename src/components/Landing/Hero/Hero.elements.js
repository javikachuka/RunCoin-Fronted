import styled from "styled-components";
// import Tilt from "react-tilt";

export const HeroSection = styled.div`
  visibility: hidden;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  //asd
`;

export const HeroRow = styled.div`
  width: 90%;
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const HeroColumn = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 915px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-top: 60px;
`;

export const TopLine = styled.div`
  color: #2563eb;
  font-size: 30px;
  font-weight: 500;

  @media screen and (max-width: 1200px) {
    font-size: 25px;
  }

  @media screen and (max-width: 968px) {
    font-size: 20px;
  }
  @media screen and (max-width: 420px) {
    font-size: 15px;
    padding-bottom: 0.2rem;
  }
`;

export const Heading = styled.div`
  color: #354d5c;
  font-weight: 500;
  font-size: 65px;
  margin-top: -10px;
  margin-left: -3px;
  @media screen and (max-width: 1200px) {
    font-size: 55px;
  }

  @media screen and (max-width: 968px) {
    font-size: 50px;
  }
  @media screen and (max-width: 420px) {
    font-size: 40px;
  }
`;

export const HeroLinks = styled.div``;
export const HeroLink = styled.a``;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

export const ImgWrapper = styled.div`
  max-width: 550px;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 968px) {
    justify-content: center;
  }
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const HeroImg = styled.img`
  width: 80%;
  border: 0;
  padding-right: 0;
  vertical-align: middle;
  display: inline-block;

  @media screen and (max-width: 968px) {
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    width: 85%;
  }
`;
