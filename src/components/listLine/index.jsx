import { useSales } from "../../providers/sales";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Div } from "./styles";

export const ListLine = ({ index, name, status, saleId, onClick }) => {
  const { updateStatus } = useSales();

  return (
    <div>
      {status === "Pronto" && (
        <button onClick={() => updateStatus(saleId, status)}>
          <AiFillCaretLeft />
        </button>
      )}
      <Div onClick={onClick}>
        <span>Pedido {index + 1}</span>
        <span>{name}</span>
      </Div>
      {status === "Em produção" && (
        <button onClick={() => updateStatus(saleId, status)}>
          <AiFillCaretRight />
        </button>
      )}
    </div>
  );
};
