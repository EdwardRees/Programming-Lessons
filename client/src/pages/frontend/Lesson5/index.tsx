import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const CountLabel = styled.label``;
const CountInput = styled.input``;
const RollButton = styled.button``;
const DiceContainer = styled.div``;
const Dice = styled.div``;

const DiceImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/600px-Dice-2-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/600px-Dice-3-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/768px-Dice-4-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/768px-Dice-5-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dice-6a-b.svg/1024px-Dice-6a-b.svg.png",
];

const Lesson5 = () => {
  const [diceCount, setDiceCount] = useState<any>(0);

  const onChangeInput = (e: any) => {
    let count = parseInt(e.target.value);
    if (isNaN(count)) {
      count = 0;
    }
    setDiceCount(count);
  };

  const roll = (id: any) => {
    let die: number = parseInt(`${Math.random() * 6}`);
    return (
      <Dice id={id}>
        <img src={DiceImages[die]}></img>
      </Dice>
    );
  };

  const rollAll = () => {

  }

  const renderDie = () => {
    ReadableStreamDefaultController;
  }


  return (
    <Container>
      <CountLabel></CountLabel>
      <CountInput onChange={onChangeInput}></CountInput>
      <RollButton ></RollButton>
      <DiceContainer>{renderDie}</DiceContainer>
    </Container>
  );
};

export { Lesson5 };
