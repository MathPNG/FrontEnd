import Card from '../../componentes/Card/Card';
import styles from './Aves.module.css'

const Aves = () => {
    return(
        <div style={{padding: "2rem"}}>
            <div className={styles.titulo}>
                <h1>Aves</h1>
                <p>Compre aves piu piu piu piu</p>
            </div>
            <div className={styles.container}>
                <Card titulo="Pardal" descricao="O Pardal é uma ave pequena muito comum em cidades. Ele se adaptou facilmente ao ambiente urbano e costuma viver perto das pessoas, em telhados, árvores e construções.
                Os pardais se alimentam de sementes, restos de comida, insetos e grãos. São aves rápidas, agitadas e bastante sociais, vivendo frequentemente em grupos. Apesar de comuns, sua população diminuiu em algumas regiões devido à poluição e à falta de locais adequados para nidificação." />
                <br />
                <Card titulo="Canário" descricao="Os canários são aves pequenas conhecidas principalmente pelo canto forte e melodioso. O mais famoso no Brasil é o Canário-da-terra, que possui plumagem amarela intensa. Já o Canário-doméstico foi domesticado ao longo do tempo e aparece em várias cores.
                Eles se alimentam principalmente de sementes, frutas e pequenos vegetais. São aves sociáveis e muito criadas como animais de estimação por causa do canto e da facilidade de cuidado. Os machos costumam cantar mais para marcar território e atrair fêmeas." />
                <br />
                <Card titulo="Tucano" descricao="Os tucanos são aves tropicais famosas pelo bico grande e colorido. Um dos mais conhecidos é o Tucano-toco, encontrado em várias regiões do Brasil.
                Mesmo parecendo pesado, o bico é leve por dentro e ajuda na alimentação e na regulação da temperatura corporal. Os tucanos comem frutas, insetos, ovos e pequenos animais. Vivem em florestas e têm grande importância na natureza, pois espalham sementes e ajudam na regeneração das matas." />
            </div>
           
        </div>
    )
}

export default Aves;