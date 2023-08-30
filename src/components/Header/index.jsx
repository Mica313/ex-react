import { useEffect, useState } from 'react';
import styles from './header.module.css';
const Header = () => {
    const [nome, setNome] = useState();
    useEffect(() => {
        setNome(prompt('Digite seu nome:'))
    }, [])
    return(
        <>
        <div className="container">
            <div>
                <h2 className={styles.title}>Olá <span className={styles.span}>{nome}</span>, vamos calcular seu IMC?</h2>
            </div>
        </div>
        </>
    )
}
export default Header;