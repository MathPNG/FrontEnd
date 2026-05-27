import { BrowserRouter, Routes, Route } from 'react-router';
import Inicio from './paginas/Inicio/Inicio'
import SobreMim from './paginas/SobreMim/SobreMim'
import Menu from './componentes/Menu/Menu'
import Banner from './componentes/Banner/Banner'
import './App.css'
import Rodape from './componentes/Rodape/Rodape';

console.log(window.location);

const App = () => {
  return(
    <BrowserRouter>
    <Menu/>
    <Banner/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default App
