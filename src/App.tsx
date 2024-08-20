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

      
   
        
   
        
    </>
     )
}

