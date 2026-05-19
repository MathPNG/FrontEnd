import "./App.css"
import Titulo from "./componentes/Titulo/Titulo";
import TituloProps from "./componentes/TituloProps/TituloProps";
import TituloUseState from "./componentes/TituloUseState/TituloUseState";
import Contador from "./componentes/Contador/Contador";

const  App = () => {
  return(
    <>
      <Titulo />
      <hr />
      <TituloProps
        descricao = "FrontEnd"
        cor = "ciano"
      />
      <hr />
      <TituloProps
        cor = "red"
        qtdAlunos = {30}
        paragrafo = {true}
      />
      <hr />
      <TituloUseState cor = "orange "/>
      <TituloUseState cor = "pink "/>
      <hr />
      <Contador/>
    </>
  )
}

export default App