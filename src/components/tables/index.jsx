import {
  ButtonDiv,
  Container,
  ListsDiv,
  SecondButtonsDiv,
  TablesDiv,
  TitlesDiv,
} from "./styles";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import FormAddSale from "../formAddSale";
import api from "../../services/api";
import TableLine from "../tableLine";
import { ListLine } from "../listLine";
import ModalCancel from "../modalCancel";

const Tables = () => {
  const [sales, setSales] = useState([]);
  const [table, setTable] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cancel, setCancel] = useState(false);
  const handleOpenCancel = () => setCancel(true);
  const handleCloseCancel = () => setCancel(false);

  const [currentId, setCurrentId] = useState("");

  const [color, setColor] = useState("");

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  };

  const style2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    background: "transparent",
  };

  useEffect(() => {
    api.get("/sales").then((res) => {
      setSales(res.data);
    });
  }, [sales]);

  return (
    <Container>
      <h2>Vendas</h2>
      <ButtonDiv>
        <button onClick={handleOpen}>NOVA VENDA</button>
      </ButtonDiv>
      <TablesDiv>
        <SecondButtonsDiv>
          <button onClick={() => setTable(true)}>TABELA</button>
          <button onClick={() => setTable(false)}>LISTAS</button>
        </SecondButtonsDiv>
        <div>
          {table === true ? (
            sales.map((sale, index) => {
              return (
                <>
                  <TableLine
                    onClick={() => {
                      sale.status !== "Cancelado" && handleOpenCancel();
                      setCurrentId(sale.id);
                    }}
                    key={sale.id}
                    index={index}
                    name={sale.name}
                    status={sale.status}
                    statusColor={color}
                  />
                </>
              );
            })
          ) : (
            <>
              <TitlesDiv>
                <div>Em produção</div>
                <div>Prontos</div>
                <div>Cancelados</div>
              </TitlesDiv>
              <ListsDiv>
                <div>
                  {sales.map((sale, index) => {
                    if (sale.status === "Em produção") {
                      return (
                        <ListLine
                          onClick={() => {
                            sale.status !== "Cancelado" && handleOpenCancel();
                            setCurrentId(sale.id);
                          }}
                          key={sale.id}
                          index={index}
                          name={sale.name}
                          status={sale.status}
                          saleId={sale.id}
                        />
                      );
                    }
                  })}
                </div>
                <div>
                  {sales.map((sale, index) => {
                    if (sale.status === "Pronto") {
                      return (
                        <ListLine
                          onClick={() => {
                            sale.status !== "Cancelado" && handleOpenCancel();
                            setCurrentId(sale.id);
                          }}
                          key={sale.id}
                          index={index}
                          name={sale.name}
                          status={sale.status}
                          saleId={sale.id}
                        />
                      );
                    }
                  })}
                </div>
                <div>
                  {sales.map((sale, index) => {
                    if (sale.status === "Cancelado") {
                      return (
                        <ListLine
                          onClick={() => {
                            sale.status !== "Cancelado" && handleOpenCancel();
                            setCurrentId(sale.id);
                          }}
                          key={sale.id}
                          index={index}
                          name={sale.name}
                          status={sale.status}
                          saleId={sale.id}
                        />
                      );
                    }
                  })}
                </div>
              </ListsDiv>
            </>
          )}
        </div>
      </TablesDiv>
      <Modal open={open} onClose={handleClose} sx={style}>
        <>
          <FormAddSale handleClose={handleClose} />
        </>
      </Modal>
      <Modal open={cancel} onClose={handleCloseCancel} sx={style2}>
        <>
          <ModalCancel handleClose={handleCloseCancel} id={currentId} />
        </>
      </Modal>
    </Container>
  );
};

export default Tables;
