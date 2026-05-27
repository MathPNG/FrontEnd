import Card from "../../componentes/Card/Card";
import styles from './Gatos.module.css'

const Gatos = () => {
    return(
        <div style={{padding: "2rem"}}>
            <div className={styles.titulo}>
                <h1>Gatos</h1>
                <p>Compre gatos miau miau miau miau</p>
            </div>

            <div className={styles.container}>
                <Card titulo="Siamês" descricao="Como um pet que adora atividades de lazer, o gato Siamês puro raramente fica parado. Ele é extremamente brincalhão e capaz de se entreter por horas com o brinquedo preferido dele. Excelentes saltadores, esses felinos estão sempre preparados para buscar objetos enquanto alguém estiver ali para jogar.
                Importante na personalidade do gato Siamês, o porte e a altivez impressionam a todos. Ele possui pernas longas e elegantes que contrastam perfeitamente com as patas delicadas. A cauda com formato de chicote completa o visual único. " />
                <br />
                <Card titulo="Persa" descricao="Uma das características mais marcantes do gato Persa é a pelagem extensa. Ela é solta e quase esvoaçante, além de estar por todo o corpo do animal, deixando-o ainda mais fofo e charmoso.
                Os pelos de diferentes tonalidades contradizem o pequeno corpo do pet. Entre as condições que marcam o gato peludo Persa estão a cabeça bem redonda, cauda curta e avantajada, além dos olhos grandes e das pequenas orelhas com pontas redondas que aparecem em meio à pelagem." />
                <br />
                <Card titulo="Maine Coon" descricao="As orelhas com tufos de pelos e a cauda bastante longa são algumas das principais características do gato americano Maine Coon. Outro ponto marcante é o comprimento do corpo, que varia entre médio e grande, com porte atlético e músculos firmes e fortes.
                Bem vaidoso com sua cauda longa e cheia, o gato adora exibi-la por onde passa. Além disso, ele costuma abraçá-la para se aquecer em dias mais frios. Para completar, o pet possui uma aparência que transmite poder e altivez." />
            </div>
        </div>
    )
}

export default Gatos;