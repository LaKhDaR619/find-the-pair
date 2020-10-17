import { useState, useEffect } from "react";
import { Col, Row } from "antd";

import { connect, useSelector } from "react-redux";
import { cardsSelector, rowCountSelector } from "../state/reducers/rootReducer";

import styled from "styled-components";

import ReactCardFlip from "react-card-flip";

const Contaienr = styled.div`
  width: 1100px;
  margin-right: 64px;
`;

const containerStyles = {
  width: "100%",
  height: "100%",
};

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

function Main() {
  const cards = useSelector(cardsSelector);
  const rowCount = useSelector(rowCountSelector);

  const [isFlipped, setIsFlipped] = useState([]);
  const [pauseFlip, setPauseFlip] = useState(false);

  useEffect(() => {
    //FirstStage();
  }, []);

  const handleRestart = () => {
    FirstStage();
    setTimeout();
  };

  const FirstStage = () => {
    // showing all images
    const temp = [];
    cards.forEach((card, index) => {
      temp[index] = true;
      setIsFlipped(temp);
    });

    // waiting 5 seconds and hiding the images
    setTimeout(() => {
      const temp2 = [];
      cards.forEach((card, index) => {
        console.log(index);
        temp2[index] = false;
        setIsFlipped(temp2);
      });
    }, 5000);
  };

  const handleFlip = (index) => {
    if (pauseFlip) return;

    const temp = [...isFlipped];
    temp[index] = !temp[index];
    setIsFlipped(temp);
  };

  return (
    <Contaienr>
      <Row gutter={[16, 16]}>
        {cards.map((card, index) => (
          <Col
            key={card}
            className="gutter-row"
            style={{
              width: `calc(100% / ${rowCount})`,
              height: "150px",
            }}
          >
            <ReactCardFlip
              isFlipped={isFlipped[index]}
              containerStyle={containerStyles}
            >
              <Card onClick={() => handleFlip(index)}>
                <QuestionMark>?</QuestionMark>
              </Card>

              <Card onClick={() => handleFlip(index)}>
                <Image src="./images/1.jpg" alt="image" />
              </Card>
            </ReactCardFlip>
          </Col>
        ))}
      </Row>
    </Contaienr>
  );
}

export default connect(null, null)(Main);
