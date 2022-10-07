import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import "./ListaTema.css";
import Box from "@mui/material/Box";
import Tema from "../../../model/Tema";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../services/Service";

function ListaTema() {
  //trazer a funcao de navigate
  let navigate = useNavigate();
  //estado para gerenciar os temas que virao do backend
  const [temas, setTemas] = useState<Tema[]>([]);
  //trazer o token do naveggador para dentro do blog
  const [token, setToken] = useLocalStorage("token");
  //verificar se a pessoa tem token, se nao tiver manda pro login
  useEffect(() => {
    if (token === "") {
      alert("Voce precisa estar logado!");
      navigate("/login");
    }
  }, [token]);
  //funcao que vai ate o backend para buscar os temas
  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: { Authorization: token },
    });
  }

  //pra rodar automatico a function de getTemas,
  // e exibir todos os temas assim q carregar a pag
  useEffect(() => {
    getTemas();
  }, [temas.length]);

  return (
    <>
      {/*mapeamento do array de temas para recriar a estrutura inteira de cada tema existente*/}
      {temas.map((tema) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to="" className="text-decorator-none">
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to="" className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTema;
