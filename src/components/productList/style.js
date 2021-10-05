import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const List = styled.div`
  border: rgba(0, 0, 0, 0.5) solid 0.5px;
  background-color: gray;
  width: 220px;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: center;
  Button {
    margin: 5px;
    background-color: rgba(202, 202, 202, 1);
    border-radius: 5px;
    padding: 2px;
  }
  h1,
  h3 {
    text-align: center;
  }
`;
