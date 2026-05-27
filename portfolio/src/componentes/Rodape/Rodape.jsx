import styles from './Rodape.module.css'
import {ReactComponent as MarcaRegistrada} from '../../assets/marca_registrada.svg'

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            <MarcaRegistrada/>
            Desenvolvido pelos alunos do 3º DEV do Sesi/Senai
        </footer>
    )
}

export default Rodape