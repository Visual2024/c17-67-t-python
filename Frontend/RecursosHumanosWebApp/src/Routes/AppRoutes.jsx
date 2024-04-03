import { Routes, Route, Outlet } from "react-router-dom";
import { Header } from "@/Layout/Header/Header";
import { MenuLateral } from "@/Layout/SideBar/MenuLateral";
import { Perfil } from "@/Pages/Perfil";
import { Login } from "@/Pages/Login";
import { Home } from "@/Pages/Home";
import { Candidates } from "@/Pages/Candidates";
import { Error404 } from "@/Pages/Error404";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/perfildeusuario" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/candidates" element={<Candidates />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export function Layout() {
  return (
    <div className="flex">
      <MenuLateral />
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
