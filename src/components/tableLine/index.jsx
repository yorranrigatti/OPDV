import { Container } from "./styles";

export const TableLine = ({ index, name, status, onClick, statusColor }) => {
  return (
    <Container status={status} onClick={onClick}>
      <div>Pedido {index + 1}</div>
      <div>{name}</div>
      <div>
        <p>{status}</p> <div></div>
      </div>
    </Container>
  );
};

export default TableLine;
