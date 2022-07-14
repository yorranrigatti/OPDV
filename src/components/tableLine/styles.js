import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  color: white;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    border: 1px solid;
    width: 33.33%;
    cursor: pointer;
  }
  div:nth-child(3) {
    p {
      color: white;
      width: 65%;
    }
    div {
      justify-content: flex-start;
      width: 15px;
      height: 15px;
      border-radius: 100%;

      background-color: ${(props) => {
        if (props.status === "Cancelado") {
          return "red";
        } else if (props.status === "Em produção") {
          return "yellow";
        } else {
          return "green";
        }
      }};
    }
  }
`;
