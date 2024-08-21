import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";

export function Router(){
    return(
        <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/Contato" element={<Contato/>} />               
        </Routes>
    )
}