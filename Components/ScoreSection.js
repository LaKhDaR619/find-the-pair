import { Divider, Button } from "antd";

import styled from "styled-components";
import MyDropDown from "./MyDropDown";

const Contaienr = styled.div`
  background: #fbfbfb;
  width: 300px;
  border-radius: 4px;
`;

const Title = styled.h2``;
const Score = styled.h1``;
const Tries = styled.h3``;
const Options = styled.h1``;
const Size = styled.span`
  font-size: 25px;
  margin-right: 10px;
`;

export default function ScoreSection() {
  return (
    <Contaienr>
      <Title>Score</Title>
      <Score>2/10</Score>
      <Tries>Tries: 5</Tries>
      <Divider />
      <Options>Options</Options>
      <Size>size</Size>
      <MyDropDown />
      <Button type="primary" style={{ marginTop: "20px" }}>
        Restart
      </Button>
    </Contaienr>
  );
}
