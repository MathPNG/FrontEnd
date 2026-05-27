import { BrowserRouter, Routes, Route } from 'react-router';
import Menu from './componentes/Menu/Menu';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Rodape from './componentes/Rodape/Rodape';
import Gatos from './paginas/Gatos/Gatos';
import Cachorros from './paginas/Cachorros/Cachorros';
import Aves from './paginas/Aves/Aves';
import Inicio from './paginas/Inicio/Inicio';

const App = () => {
  return(
    <div className='tudo'>
      <BrowserRouter>
        <Menu />
        <Banner />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Cachorros' element={<Cachorros />} />
          <Route path='/Gatos' element={<Gatos />} />
          <Route path='/Aves' element={<Aves />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  )
}

export default App;