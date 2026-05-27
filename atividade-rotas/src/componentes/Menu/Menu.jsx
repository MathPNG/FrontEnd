import styles from './Menu.module.css'
import MenuLink from '../MenuLink/MenuLink'
import petshop from '../../assets/petshop.png'

const Menu  = () => {

    return (
        <header>
            <img className={styles.petshop} src={petshop} alt="PetShop" />
            <nav className={styles.navegacao}>
                <MenuLink to = "/">
                    Início
                </MenuLink>
                <MenuLink to = "/Cachorros">
                    Cachorros
                </MenuLink>
                <MenuLink to = "/Gatos">
                    Gatos
                </MenuLink>
                <MenuLink to = "/Aves">
                    Aves
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu