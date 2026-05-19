import "./Titulo.css"

const Titulo = () => {
    let nome = "Matheus"
    
    return(
        <div className="container">
            <h1 className="titulo-principal">
                Aula 2 - Trabalhando com useState
            </h1>
            <h2 className="subtitulo">
                Olá, eu sou o {nome}, e hoje vamos aprender um pouco sobre o Hook useState.
            </h2>
            <p className="paragrafo">
                O useState é um Hook fundamental do React que permite criar variáveis de estado em componentes funcionais
            </p>
            <p className="paragrafo">
                Ele retorna um array com a variável de esado (valor atual) e uma função para atualizá-la, forçando o componente a renderizar novamente quando o valor muda.
            </p>
            <img 
                src="reactHook.png"
                alt="Imagem do Hook useState" 
                className="imagem-titulo"
            />
        </div>
  )
}

export default Titulo