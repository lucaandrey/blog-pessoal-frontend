import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import UsuarioLogin from "../../model/UsuarioLogin";
import { login } from "../../services/Service";
import useLocalStorage from "react-use-localstorage";
import "./Login.css";

function Login() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function conectar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inconsistentes. Erro ao logar!");
    }
  }

  useEffect(() => {
    if (token !== "") {
      navigate("/home");
    }
  }, [token]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={conectar}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="texto1"
            >
              Entrar
            </Typography>
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              value={userLogin.usuario}
              id="usuario"
              name="usuario"
              label="usuário"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              value={userLogin.senha}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />

            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Logar
              </Button>
            </Box>
          </form>

          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrar">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="texto1"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

      <Grid xs={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;
