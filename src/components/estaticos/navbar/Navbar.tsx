import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Navbar.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuario deslogado!");
    navigate("/login");
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Luca Coding
            </Typography>
          </Box>
          <Grid container justifyContent="flex-end">
            <Box display="flex" justifyContent="space-around">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link to="/posts" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Posts
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Themes
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Register Theme
                  </Typography>
                </Box>
              </Link>

              <Box mx={1} className="cursor" onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
