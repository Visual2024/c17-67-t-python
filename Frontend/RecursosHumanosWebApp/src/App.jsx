import { Routes, Route } from "react-router-dom";
import {Header} from "./Layout/Header/Header";
import {MenuLateral} from "./Layout/SideBar/MenuLateral";
import "./Styles/App.css";
import {Perfil} from "./Pages/Perfil";
import {Login} from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Candidates } from "./Pages/Candidates";

function App() {
  return (
    <>
      <Header />
      <MenuLateral />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfildeusuario" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/candidates" element={<Candidates />} />
      </Routes>
    </>
  );
}

export default App;
