import React, { useState } from "react";
import styled from "styled-components";

const Add = styled.button`
  border: 3px solid red;
  background-color: gray;
  padding: 5px 10px;
  cursor: pointer;
`;

const Reset = styled.button`
  background-color: orange;
  font-style: italic;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
`;

const Counter = styled.h1`
  color: ${(props) => (props.Big ? "red" : "blue")};
  font-size: 10px;
`;

const MyCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Add onClick={() => setCount(count + 1)}>Add</Add>
      <Reset onClick={() => setCount(0)}>Reset</Reset>
      <Counter Big={count > 5}>Counter is {count}</Counter>
    </div>
  );
};

export default MyCounter;
