import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalogo } from "./pages/Catalogo";
import { Contato } from "./pages/Contato";

export function Router(){
    return(
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/catalog" element={<Catalogo/>} />  
         <Route path="/Contato" element={<Contato/>} />               
        </Routes>
    )
}