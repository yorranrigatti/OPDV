import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 20px;
    font-size: 35px;
    color: var(--color-primary);
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  width: 95%;
  height: 50px;
  margin-bottom: 50px;

  button {
    width: 150px;
    height: 37px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 7px;
    font-size: 15px;
    font-weight: 500;

    :hover {
      color: var(--color-primary);
      background-color: var(--color-accent);
    }
  }
`;

export const TablesDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 450px;
  background-color: var(--color-primary);

  div:nth-child(1) {
    width: 100%;
    height: 50px;
    background-color: var(--color-secondary);

    button {
      height: 100%;
      width: 50%;
    }
  }
`;
