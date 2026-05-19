import "./Contador.css"
import { useState } from "react"

const Contador = () => {
    const [Contador, setContador] = useState(0)
    return(
        <div>
            <h3 className="titulo-menor">
                Contador: {Contador}
            </h3>

            <button 
                className="btn-incrementar"
                onClick={()=> setContador(Contador + 1)}
            >
                Incremento
            </button>
        </div>
    )
}

export default Contador