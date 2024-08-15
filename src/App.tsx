import { BrowserRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router} from './Router'
import { NavBar } from './components/navbar';

export function App() {
  
  return (
    <>
    <NavBar></NavBar>
    
    <BrowserRouter>   
      <Router/>
    </BrowserRouter>

      
   
        
    <footer className="bg-light text-center text-lg-start mt-5">
            <div className="container p-4">
            <p>© 2024 Jota Car Veículos. Todos os direitos reservados.</p>
            </div>
        </footer>
        
    </>
     )
}

