import Input from "../input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import Select from "../select";
import api from "../../services/api";
import toast from "react-hot-toast";

const FormAddSale = ({ handleClose }) => {
  const Schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    products: yup.string().required("Descrição brigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post("/sales", data)
      .then(() => {
        toast.success("Venda realizada com sucesso!");
      })
      .catch(() => toast.error("Falha na requisição"));
    handleClose();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Nova venda</h2>
      <div>
        <Input
          label="nome"
          register={register}
          name="name"
          type="text"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
        />
        <Select
          register={register}
          label="status"
          name="status"
          op1="Em produção"
          op2="Pronto"
          op3="Cancelado"
        />
      </div>
      <Input
        label="produtos"
        register={register}
        name="products"
        error={!!errors.products?.message}
        helperText={errors.products?.message}
      />
      <div>
        <button type="submit">Salvar</button>
        <button onClick={handleClose}>Cancelar</button>
      </div>
    </Container>
  );
};

export default FormAddSale;
