import "./App.css"
import BoasVindas from "./componentes/BoasVindas/BoasVindas";
import MensagemSecreta from "./componentes/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./componentes/CartaoProduto/CartaoProduto";
import Contador2 from "./componentes/Contador2/Contador2";
import Formulario from "./componentes/Formulario/Formulario";

const AppExercicio = () => {
  return(
    <div>
      <BoasVindas name="Matheus"/>
      <hr />
      <MensagemSecreta mensagem=" ..-. .- .-.. .- / -... .- .. -..- --- / --.. . "/>
      <hr />
      <h2>Nossos Produtos</h2>

      <div className="lista-produtos">
        <CartaoProduto 
          nome="Mamadeira" 
          preco="00,69" 
          imagem="mamadeira.jpg" 
        />
  
        <CartaoProduto 
          nome="Chocalho" 
          preco="12,00"
          imagem="chocalho.jpg" 
        />
  
        <CartaoProduto 
           nome="Chupeta" 
           preco="899,90" 
           imagem="chupeta.jpg" 
         />
      </div>
      <hr />
      <Contador2 />
      <hr />
      <Formulario />
    </div>
  )
}

export default AppExercicio