import { Routes, Route } from "react-router-dom";

import Header from "./Components/layout/Header";
import {MenuLateral} from "./Components/Menu/MenuLateral";

import Perfil from "./Pages/Perfil";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

import { Candidates } from "./Pages/Candidates";

import "./Styles/App.css";


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
