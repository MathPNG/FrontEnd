import "./Botao.css";

function Botao({ texto, acao, tipo }) {
  return (
    <button className={`Botao ${tipo}`} onClick={acao}>
      {texto}
    </button>
  );
}

export default Botao;