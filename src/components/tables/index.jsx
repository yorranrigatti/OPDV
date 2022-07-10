import { ButtonDiv, Container, TablesDiv } from "./styles";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import FormAddSale from "../formAddSale";

const Tables = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <Container>
      <h2>Vendas</h2>
      <ButtonDiv>
        <button onClick={handleOpen}>NOVA VENDA</button>
      </ButtonDiv>
      <TablesDiv>
        <div>
          <button>TABELA</button>
          <button>LISTAS</button>
        </div>
        <div></div>
      </TablesDiv>
      <Modal open={open} onClose={handleClose} sx={style}>
        <>
          <FormAddSale handleClose={handleClose} />
        </>
      </Modal>
    </Container>
  );
};

export default Tables;
