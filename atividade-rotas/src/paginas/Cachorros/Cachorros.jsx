import Card from '../../componentes/Card/Card';
import styles from './Cachorros.module.css'

const Cachorros = () => {
    return(
        <div style={{padding: "2rem"}}>
            <div className={styles.titulo}>
                <h1>Cachorros</h1>
                <p>Compre cachorros au au au au</p>
            </div>

            <div className={styles.container}>
                <Card
                titulo="Rottweiler"
                descricao="Desenvolvidos para o trabalho, os cães dessa raça são extremamente ativos e territorialistas. Por isso, é comum vê-los como guias policiais, exímio competidores, excelente guardiões e qualquer outro serviço que seja designado para eles.
                Devido ao seu tamanho, tendem a comer muito. Portanto, cabe ao tutor delimitar a quantidade ideal de ração e realizar passeios diários com o seu cachorro para evitar o sobrepeso. Atividades que exijam inteligência irão melhor desenvolver todo o potencial do pet, além de evitar que ele fique no tédio." />
                <br />
                <Card
                titulo="Pitbull"
                descricao="A raça de Pitbull sempre chamou muita atenção por conta do porte físico atlético. Os músculos desse cão são bastante aparentes e demandam uma alimentação especial para permanecerem saudáveis. Por esse motivo, o pet é extremamente ativo, com alta necessidade de passeios, brincadeiras e exercícios físicos.
                Um dos mitos em torno das condições físicas do Pitbull é sobre o travamento de mandíbulas, afirmando que, quando o cachorro prende algo na boca, é impossível fazê-lo soltar. Pesquisas realizadas com diversas raças relatam que isso não é verdade, apesar da força que esse cão possui e do estilo “tesoura” de sua dentição." />
                <br />
                <Card
                titulo="São bernardo"
                descricao="Prepare-se para conhecer um verdadeiro gigante entre as raças de cachorro. Nosso querido São Bernardo tem o corpo equilibrado, com porte poderoso e resistente. Ele também tem como característica marcante a expressão facial em alerta.
                Contudo, as aparências podem enganar. Ao contrário do que muitos imaginam, essa não é uma raça atlética. O cachorro exige quantidade moderada de exercício, com o nível de energia um tanto equilibrado!" />
            </div>
        </div>
    )
}

export default Cachorros;