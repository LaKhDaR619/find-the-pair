import { Divider, Button } from "antd";
import { connect, useSelector } from "react-redux";

import styled from "styled-components";
import {
  selectedSizeSelector,
  scoreSelector,
  triesSelector,
} from "../state/reducers/rootReducer";
import MyDropDown from "./MyDropDown";

const Contaienr = styled.div`
  background: #fbfbfb;
  min-width: 300px;
  max-width: 300px;
  border-radius: 4px;
  font-family: Nunito;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;
const Score = styled.span`
  color: #1890ff;
`;
const SubScore = styled.span`
  font-size: 35px;
  font-weight: 700;
`;
const SubTries = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
`;
const Tries = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  color: ${(props) => (props.tries <= 3 ? "red" : "black")};
`;
const Options = styled.h1`
  font-family: Nunito;
`;
const Size = styled.span`
  font-size: 30px;
  margin-right: 10px;
`;

function ScoreSection({ getCards }) {
  const score = useSelector(scoreSelector);
  const tries = useSelector(triesSelector);
  const size = useSelector(selectedSizeSelector);

  const handleRestart = () => {
    getCards(size);
  };

  return (
    <Contaienr>
      <Title>Score</Title>
      <SubScore>
        <Score>{score}</Score> / {size}
      </SubScore>
      <SubTries>
        Tries: <Tries tries={tries}>{tries}</Tries>
      </SubTries>
      <Divider />
      <Options>Options</Options>
      <Size>size</Size>
      <MyDropDown />
      <Button
        type="primary"
        style={{ marginTop: "20px" }}
        onClick={handleRestart}
      >
        Restart
      </Button>
    </Contaienr>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: (size) => dispatch({ type: "GET_CARDS", payload: { size } }),
  };
};

export default connect(null, mapDispatchToProps)(ScoreSection);
