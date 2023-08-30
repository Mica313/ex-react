import styles from './tab.module.css';
function Tabela({resultado}){
    function magreza() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoM}`}>MENOR QUE 18,5</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoM}`}>MAGREZA</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoM} ${styles.textCenter}`}>0</td>
            </>
        )
    }

    function normal() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoNormal}`}>ENTRE 18,5 E 24,9</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoNormal}`}>NORMAL</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoNormal} ${styles.textCenter}`}>0</td>
            </>
        )
    }

    function sobrepeso() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoSB}`}>ENTRE 25,0 E 29,9</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoSB}`}>SOBREPESO</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoSB} ${styles.textCenter}`}>I</td>
            </>
        )
    }

    function obesidade() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoOB}`}>ENTRE 30,0 E 39,9</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoOB}`}>OBESIDADE</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoOB} ${styles.textCenter}`}>II</td>
            </>
        )
    }

    function obesidadeGrave() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoGrave}`}>MAIOR QUE 40,0	</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoGrave}`}>OBESIDADE GRAVE	</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoGrave} ${styles.textCenter}`}>III</td>
            </>
        )
    }
    return (
        <div className='container'>
            <table className={styles.table}>
                <thead className={styles.header}>
                    <tr>
                        <th colSpan={3}>ANALISE DO IMC </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.tableTitle}>IMC</td>
                        <td className={styles.tableTitle}>CLASSIFICAÇÃO</td>
                        <td className={styles.tableTitle}>GRAU OBESIDADE</td>
                    </tr>
                    <tr>
                        {
                            resultado < 18.5 ? magreza() :
                                <>
                                    <td className={styles.tableText}>MENOR QUE 18,5</td>
                                    <td className={styles.tableText}>MAGREZA</td>
                                    <td className={styles.textCenter}>0</td>
                                </>
                        }
                    </tr>
                    <tr>
                        {
                            resultado >= 18.5 && resultado <= 24.9 ? normal() :
                                <>
                                    <td className={styles.tableText}>ENTRE 18,5 E 24,9</td>
                                    <td className={styles.tableText}>NORMAL</td>
                                    <td className={styles.textCenter}>0</td>
                                </>
                        }
                    </tr>
                    <tr>
                        {
                            resultado >= 25 && resultado <= 29.9 ? sobrepeso() :
                                <>
                                    <td className={styles.tableText}>ENTRE 25,0 E 29,9</td>
                                    <td className={styles.tableText}>SOBREPESO</td>
                                    <td className={styles.textCenter}>I</td>
                                </>
                        }
                    </tr>
                    <tr>
                        {
                            resultado >= 30 && resultado <= 39.9 ? obesidade() :
                                <>
                                    <td className={styles.tableText}>ENTRE 30,0 E 39,9</td>
                                    <td className={styles.tableText}>OBESIDADE</td>
                                    <td className={styles.textCenter}>II</td>
                                </>
                        }
                    </tr>
                    <tr>
                        {
                            resultado >= 40 ? obesidadeGrave() :
                                <>
                                    <td className={styles.tableText}>MAIOR QUE 40,0	</td>
                                    <td className={styles.tableText}>OBESIDADE GRAVE	</td>
                                    <td className={styles.textCenter}>III</td>
                                </>
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Tabela;
