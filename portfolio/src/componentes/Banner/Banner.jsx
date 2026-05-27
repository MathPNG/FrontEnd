import styles from './Banner.module.css'
import minhaFoto from '../../assets/matheus.png'
import circuloColorido from '../../assets/circulo_colorido.png'

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu Portfólio. Meu nome é Matheus Vieira, sou aluno do Senai do curso de DEV e estou aprendendo React.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido} alt="Círculo colorido" />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto} alt="Foto de perfil do Matheus Vieira" />
            </div>
        </div>
)
}

export default Banner