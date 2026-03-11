import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Propaganda } from "./pages/Propaganda";

export function Router(){
    return(
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/imagens" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/contato" element={<Contato/>} />   
         <Route path="/propaganda" element={<Propaganda/>} />               
        </Routes>
    )
}