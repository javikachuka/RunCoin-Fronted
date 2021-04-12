import styled from "styled-components";
import { Container } from "../../../globalStyles";

export const ContentBody = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #1d212b;
`;
export const ContentContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;

  ${Container}
`;
export const GameRow = styled.div`
  width: 60%;
  margin-right: 20px;
  min-height: 200px;
`;
export const SeasonRow = styled.div`
  width: 40%;
  background: #242936;
`;
