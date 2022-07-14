import { Container } from "./styles";
import api from "../../services/api";
import toast from "react-hot-toast";

const ModalCancel = ({ handleClose, id }) => {
  const handleCancel = (id) => {
    api
      .patch(`/sales/${id}`, { status: "Cancelado" })
      .then(() => {
        toast.success("Venda cancelada com sucesso!");
      })
      .catch(() => toast.error("Falha na requisição"));
    handleClose();
  };

  return (
    <Container>
      <h2>Deseja cancelar a venda?</h2>
      <div>
        <button onClick={() => handleCancel(id)}>Salvar</button>
        <button onClick={handleClose}>Cancelar</button>
      </div>
    </Container>
  );
};

export default ModalCancel;
