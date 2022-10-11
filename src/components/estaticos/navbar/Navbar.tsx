import React, { useEffect, useState } from "react";
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
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuario deslogado!");
    navigate("/login");
  }
  return (
    <>
      <AppBar position="static" className={scrolled ? "scrolled" : ""}>
        <Toolbar variant="dense" className="NavBar">
          <Box className="cursor">
            <Typography variant="h5" color="inherit" className="links">
              Luca Coding
            </Typography>
          </Box>
          <Grid container justifyContent="flex-end">
            <Box display="flex" justifyContent="space-around">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="links">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link to="/posts" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="links">
                    Posts
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="links">
                    Themes
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="links">
                    Register Theme
                  </Typography>
                </Box>
              </Link>

              <Box mx={1} className="cursor" onClick={goLogout}>
                <Typography variant="h6" color="inherit" className="links">
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
