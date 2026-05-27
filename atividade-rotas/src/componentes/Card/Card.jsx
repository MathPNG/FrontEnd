import styles from './Card.module.css'

const Card = ({titulo, descricao}) => {
    return(
        <div className={styles.cards}>
            <h2>{titulo}</h2>
            <br />
            <p>{descricao}</p>
        </div>
    )
}

export default Card;