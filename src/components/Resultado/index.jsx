import styles from './resultado.module.css';
const Resultado = ({resultado}) => {
    return(
        <div className='container'>
            <div>
                <p className={styles.result}>SEU IMC:{resultado}</p>
            </div>
        </div>
    )
}
export default Resultado;