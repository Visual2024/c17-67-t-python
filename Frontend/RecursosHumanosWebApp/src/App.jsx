import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MenuLateral from "./Components/MenuLateral";
import "./Styles/App.css";
import Perfil from "./Pages/Perfil";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfildeusuario" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </BrowserRouter>
      <MenuLateral />
    </>
  );
}

export default App;
