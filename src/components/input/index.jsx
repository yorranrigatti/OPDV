import TextField from "@mui/material/TextField";
import { InputContainer } from "./styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#31295C",
    },
  },
});

const Input = ({ label, register, name, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <InputContainer>
        <TextField
          color="primary"
          variant="outlined"
          label={label}
          {...rest}
          size="small"
          {...register(name)}
        />
      </InputContainer>
    </ThemeProvider>
  );
};

export default Input;
