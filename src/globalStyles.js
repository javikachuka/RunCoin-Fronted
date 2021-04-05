import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

body{
    font-family: 'Montserrat', sans-serif;
    background: #F8FAFF;
}

.shadow-sm{
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.shadow-md{
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
}

/* .bg-slightpurple{
  background: #6366F1;
} */
.bg-slightpurple{
  background-image: linear-gradient( 135.9deg,  rgba(109,25,252,1) 16.4%, rgba(125,31,165,1) 56.1% );
}

.bg-deepblue{
  background-image: linear-gradient( 109.6deg,  rgba(255,207,84,1) 11.2%, rgba(255,158,27,1) 91.1% );
}
.bg-blue{
  background: #1D4ED8;
}
.bg-lightgreen{
  background-image: linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% );
}
.bg-salmon{
  /* background: #FFE2C2; */
  background: linear-gradient(315deg ,#f6a99b, #FFE2C2);
}
.color-dark{
  color: #354D5C !important;
}


.bitnetLogo{
  width: 50%;
  /* height:125%; */
}



`;

export const rotate = keyframes`
  0% {
    transform: rotate(35deg);
  }

  50%{
    transform: rotate(60deg);
  }

  100%{
    transform: rotate(35deg);
  }
`;

export const Container = styled.div`
  /* z-index: 1; */
  width: 100%;
  max-width: 1366px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Pentagon = styled.div`
  /* clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); */
  width: 10vw;
  height: 10vw;
  transform: rotate(50deg);
  position: absolute;
  border-radius: 1rem;
  top: 3%;
  left: -10%;
  /* background: rgba(34, 211, 238, 40%); */

  background: linear-gradient(90deg, transparent (22px - 1px), transparent 1%)
      center,
    linear-gradient(transparent (22px - 1px), transparent 1%) center, #2567eb;
  /* background-size: 22px 22px; */
  animation: ${rotate} 10s ease-in-out infinite;
`;

export default GlobalStyle;
