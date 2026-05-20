import { useState } from "react";
import "./Contador2.css";
import Botao from "./Botao/Botao";

function Contador2() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  function limpar() {
    setContador(0);
  }

  return (
    <div className="ContadorContainer">
      <h1>{contador}</h1>

      <div className="Botoes">
        <Botao
          texto="Incrementar"
          acao={incrementar}
          tipo="incrementar"
        />

        <Botao
          texto="Decrementar"
          acao={decrementar}
          tipo="decrementar"
        />

        <Botao
          texto="Limpar"
          acao={limpar}
          tipo="limpar"
        />
      </div>
    </div>
  );
}

export default Contador2;