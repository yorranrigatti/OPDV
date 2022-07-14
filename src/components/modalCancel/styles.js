import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 296px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border: 3px solid var(--color-primary);
  border-radius: 4px;

  h2 {
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    gap: 8px;
  }

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
