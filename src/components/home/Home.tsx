import "./Home.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import "./Home.css";
import { useEffect, useState } from "react";
import TabPostagem from "../postagens/tabpostagem/TabPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Home() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo1"
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo1"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Button className="botao">Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} className="imagem"></Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem></TabPostagem>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
