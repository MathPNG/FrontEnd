import { useState } from "react"
import "./TituloUseState.css"

const TituloUseState = ({cor}) => {

    const [texto, setTexto] = useState("Título inicial")
    const [inputTexto, setInputTexto] = useState("")

    const mudarTexto = () => {
        setTexto(inputTexto)
        console.log(texto)
    }
    return(
        <div>
            <h2 style={{color: cor}}>
                {texto}
            </h2>

            <input
                className="input-texto"
                type="text"
                onChange={(e) => (setInputTexto(e.target.value))}
                
            />

            <button 
                className="btn-mudar"
                onClick={()=> mudarTexto()}
            >
                Mudar
            </button>

            {/* <button 
                className="btn-mudar"
                onClick={() => {setTexto("Título atualizado")}}
            >
                Mudar
            </button> */}
        </div>
    )
}

export default TituloUseState