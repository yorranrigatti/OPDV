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
`;

export const SecondButtonsDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--color-secondary);

  button {
    height: 100%;
    width: 50%;
    background-color: white;
    color: var(--color-primary);
    font-size: 20px;
    font-family: "Poppins", sans-serif;

    :hover {
      color: var(--color-accent);
    }
  }
`;

export const TitlesDiv = styled.div`
  width: 100%;
  display: flex;

  div {
    width: 33.33%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

export const ListsDiv = styled.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    width: 30%;
    border: 1px solid white;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 50px;

      button {
        border: none;
        background-color: transparent;

        svg {
          color: white;
          font-size: 20px;
        }
      }

      div {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      span {
        text-align: center;
        color: white;
      }
    }
  }
`;
