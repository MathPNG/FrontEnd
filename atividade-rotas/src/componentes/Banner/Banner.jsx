import styles from './Banner.module.css'
import imagem from '../../assets/cachorroegato.png'

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Bem vindo!</h1>
                <p className={styles.paragrafo}>
                    Nossa empresa foca em vender animais de forma responsável, prezando pelo bem-estar dos nossos amiguinhos.
                    <img className={styles.imagem} src={imagem}  alt="Descrição da imagem" />
                </p>
            </div>
        </div>
)
}

export default Banner