import "antd/dist/antd.css";

import styled from "styled-components";

import Main from "./Main";
import ScoreSection from "./ScoreSection";

const Contaienr = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const SubContainer = styled.div`
  display: flex;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  backgroud: #f2f2f2;
`;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 55px;
`;

export default function App() {
  return (
    <Contaienr>
      <Header>
        <Title>Find the pairs</Title>
      </Header>
      <SubContainer>
        <Main />
        <ScoreSection />
      </SubContainer>
    </Contaienr>
  );
}
