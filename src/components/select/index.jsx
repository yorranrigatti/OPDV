import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../input";
import { SelectContainer } from "./styles";

const BasicSelect = ({ label, helperText, error, register, name, ...rest }) => {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <SelectContainer>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            label={label}
            helperText={helperText}
            error={error}
            {...rest}
            {...register(name)}
            onChange={handleChange}
          >
            <MenuItem value={"Em produção"}>Em produção</MenuItem>
            <MenuItem value={"Pronto"}>Pronto</MenuItem>
            <MenuItem value={"Cancelado"}>Cancelado</MenuItem>
          </Select>
        </FormControl>
      </SelectContainer>
    </ThemeProvider>
  );
};

export default BasicSelect;
