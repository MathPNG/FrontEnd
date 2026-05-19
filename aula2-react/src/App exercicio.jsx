import "./App.css"
import BoasVindas from "./componentes/BoasVindas/BoasVindas";
import MensagemSecreta from "./componentes/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./componentes/CartaoProduto/CartaoProduto";

const AppExercicio = () => {
  return(
    <div>
      <BoasVindas name="Matheus"/>
      <hr />
      <MensagemSecreta mensagem=" ..-. .- .-.. .- / -... .- .. -..- --- / --.. . "/>
      <hr />
      <h2>Nossos Produtos</h2>
      
      <CartaoProduto 
        nome="Mamadeira" 
        preco="00,69" 
        imagem="mamadeira.jpg" 
      />
      
      <CartaoProduto 
        nome="Chocalho" 
        preco="de graça"
        imagem="chocalho.jpg" 
      />
      
      <CartaoProduto 
        nome="Chupeta" 
        preco="899,90" 
        imagem="chupeta.jpg" 
      />
    </div>
  )
}

export default AppExercicio