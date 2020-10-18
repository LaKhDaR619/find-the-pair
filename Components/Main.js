import { useEffect } from "react";
import { Button, Col, Row } from "antd";

import { connect, useSelector } from "react-redux";
import {
  cardsSelector,
  rowCountSelector,
  isFlippedSelector,
  pauseFlipSelector,
  selectedSizeSelector,
  pairSelector,
  foundCardsSelector,
  scoreSelector,
  triesSelector,
} from "../state/reducers/rootReducer";

import styled from "styled-components";

import ReactCardFlip from "react-card-flip";
import { getCards } from "../state/sagas/cardsSaga";

const Contaienr = styled.div`
  min-width: 1100px;
  max-width: 1100px;
  margin-right: 64px;
`;

const Card = styled.div`
  background: #1890ff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

const QuestionMark = styled.p`
  margin: 0;
  font-family: Nunito;
  font-size: 50px;
  font-weight: 700;
  color: #ffffff;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const WinScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const WinText = styled.h1``;

function Main({
  setIsFlipped,
  setPauseFlip,
  setPair,
  setFoundCards,
  setScore,
  getCards,
  setTries,
}) {
  const size = useSelector(selectedSizeSelector);
  const cards = useSelector(cardsSelector);
  const rowCount = useSelector(rowCountSelector);
  const isFlipped = useSelector(isFlippedSelector);
  const pauseFlip = useSelector(pauseFlipSelector);
  const pair = useSelector(pairSelector);
  const foundCards = useSelector(foundCardsSelector);
  const score = useSelector(scoreSelector);
  const tries = useSelector(triesSelector);

  const handleFlip = (index) => {
    if (pauseFlip) return;

    // flipping the card if it is not flipped
    if (!isFlipped[index]) {
      const temp = [...isFlipped];
      temp[index] = true;
      setIsFlipped(temp);
    }

    console.log(pair);
    // adding it to the pair array
    if (pair.length == 0) {
      console.log("here");
      setPair([{ card_id: cards[index], card_index: index }]);
    } else if (pair.length == 1 && pair[0].card_index != index) {
      console.log("here");
      setPauseFlip(true);
      // the pairs match
      if (pair[0].card_id == cards[index]) {
        const temp = [...foundCards];
        temp[pair[0].card_index] = true;
        temp[index] = true;

        setTimeout(() => {
          setScore(score + 1);
          setFoundCards(temp);
          setPauseFlip(false);
        }, 1000);
      } else {
        const temp = [...isFlipped];
        temp[pair[0].card_index] = false;
        temp[index] = false;

        setTimeout(() => {
          setTries(tries - 1);
          setIsFlipped(temp);
          setPauseFlip(false);
        }, 1000);
      }

      // clear the pair array
      setPair([]);
    }
  };

  const containerStyles = {
    width: "100%",
    height: "100%",
  };

  const hide = {
    display: "none",
  };

  let resultBoard;

  if (score == size)
    resultBoard = (
      <WinScreen>
        <WinText>Congrates You Won !!</WinText>
        <Button onClick={() => getCards(size)}>Play Again ?</Button>
      </WinScreen>
    );
  else if (tries == 0)
    resultBoard = (
      <WinScreen>
        <WinText>You Lost !!</WinText>
        <Button onClick={() => getCards(size)}>Play Again ?</Button>
      </WinScreen>
    );

  return (
    <Contaienr>
      {resultBoard ? (
        resultBoard
      ) : (
        <Row gutter={[16, 16]}>
          {cards.map((card, index) => (
            <Col
              key={index.toString()}
              className="gutter-row"
              style={{
                width: `calc(100% / ${rowCount})`,
                height: "150px",
              }}
            >
              <ReactCardFlip
                isFlipped={isFlipped[index]}
                containerStyle={foundCards[index] ? hide : containerStyles}
              >
                <Card onClick={() => handleFlip(index)}>
                  <QuestionMark>?</QuestionMark>
                </Card>

                <Card onClick={() => handleFlip(index)}>
                  <Image src={`./images/${card}.jpg`} alt="image" />
                </Card>
              </ReactCardFlip>
            </Col>
          ))}
        </Row>
      )}
    </Contaienr>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: (size) => dispatch({ type: "GET_CARDS", payload: { size } }),
    setIsFlipped: (isFlipped) =>
      dispatch({ type: "SET_IS_FLIPPED", payload: { isFlipped } }),
    setPauseFlip: (pauseFlip) =>
      dispatch({ type: "SET_PAUSE_FLIP", payload: { pauseFlip } }),
    setPair: (pair) => dispatch({ type: "SET_PAIR", payload: { pair } }),
    setFoundCards: (foundCards) =>
      dispatch({ type: "SET_FOUND_CARDS", payload: { foundCards } }),
    setScore: (score) => dispatch({ type: "SET_SCORE", payload: { score } }),
    setTries: (tries) => dispatch({ type: "SET_TRIES", payload: { tries } }),
  };
};

export default connect(null, mapDispatchToProps)(Main);
