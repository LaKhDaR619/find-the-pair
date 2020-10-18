import "antd/dist/antd.css";

import { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import styled from "styled-components";

import Main from "./Main";
import ScoreSection from "./ScoreSection";

import {
  cardsLoadingSelector,
  selectedSizeSelector,
} from "../state/reducers/rootReducer";

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
  height: 65px;
  backgroud: #f2f2f2;
`;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 50px;
`;

function App({ getCards }) {
  useEffect(() => {
    getCards(size);
  }, []);

  const size = useSelector(selectedSizeSelector);
  const cardsLoading = useSelector(cardsLoadingSelector);

  // if i want to display a loading screen
  //if (cardsLoading) return <p>Loading</p>;

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

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: (size) => dispatch({ type: "GET_CARDS", payload: { size } }),
  };
};

export default connect(null, mapDispatchToProps)(App);
