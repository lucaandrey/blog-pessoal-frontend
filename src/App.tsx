import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Login from "./components/login/Login";
import CadastroUsuario from "./components/cadastro/CadastroUsuario";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrar" element={<CadastroUsuario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
