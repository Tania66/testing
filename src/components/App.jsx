import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Faforites/Favorites"));

export const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element ={<Home/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/favorites"  element ={<Favorites/>}/>
      </Route>
      <Route path="*"  element ={<Navigate to = " / "  />}/>
    </Routes>
  
  )
}

