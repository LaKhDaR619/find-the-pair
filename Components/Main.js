import { Col, Row } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";
import { cardsSelector, rowCountSelector } from "../state/reducers/rootReducer";

const Contaienr = styled.div`
  min-width: 1100px;
  margin-right: 64px;
  //background: red;
`;

const Card = styled.div`
  background: #1890ff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const QuestionMark = styled.p`
  margin: 0;
  font-family: Nunito;
  font-size: 50px;
  font-weight: 700;
  color: #ffffff;
`;

function Main({ cards, rowCount }) {
  return (
    <Contaienr>
      <Row gutter={[16, 16]}>
        {cards.map((card) => (
          <Col
            key={card}
            className="gutter-row"
            style={{
              width: `calc(100% / ${rowCount || "5"})`,
              height: "150px",
            }}
          >
            <Card>
              <QuestionMark>?</QuestionMark>
            </Card>
          </Col>
        ))}
      </Row>
    </Contaienr>
  );
}

const mapStateToProps = (state) => {
  return {
    cards: cardsSelector(state),
    rowCount: rowCountSelector(state),
  };
};

export default connect(mapStateToProps, null)(Main);
