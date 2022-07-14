import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const updateStatus = (id, status) => {
    let newStatus = "";
    if (status === "Em produção") {
      newStatus = "Pronto";
    } else {
      newStatus = "Em produção";
    }

    api
      .patch(`/sales/${id}`, { status: newStatus })
      .then((_) => {
        toast.success("status alterado com sucesso");
      })
      .catch((_) => {
        toast.error("Falha ao alterar o status");
      });
  };

  return (
    <SalesContext.Provider value={{ updateStatus }}>
      {children}
    </SalesContext.Provider>
  );
};

export const useSales = () => useContext(SalesContext);
