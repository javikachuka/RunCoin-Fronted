import styled from "styled-components";

export const HeroSection = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroRow = styled.div`
  width: 100%;
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const HeroColumn = styled.div`
  align-items: center;
  display: flex;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 915px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;

    &:first-child {
      padding-bottom: 1.5rem;
    }
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  @media screen and (max-width: 915px) {
    text-align: center;
  }
`;

export const TopLine = styled.div`
  font-size: 1.5rem;
  font-weight: 400;

  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
`;

export const Heading = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 3rem;
  padding-bottom: 0.5rem;

  @media screen and (max-width: 420px) {
    font-size: 2.5rem;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
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
  width: 100%;
  border: 0;
  padding-right: 0;
  vertical-align: middle;
  display: inline-block;
`;
