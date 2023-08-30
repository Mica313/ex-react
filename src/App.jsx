import { useState } from 'react';
import Header from './components/Header';
import Tabela from './components/Tab';
import Resultado from './components/Resultado';

function App() {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [resultado, setResultado] = useState();
  function calculaIMC(){
    const resultado = peso / (altura * altura);
    setResultado(resultado);
  }

  return (
    <>
      <Header/>
      <div className="container">
        <form className='form'>
          <div className="formContainer">
            <label htmlFor='altura'>Sua altura</label>
            <input type="number" id='altura' className='form_input' onBlur={e => setAltura(e.target.value)} placeholder='Em metros'/>
          </div>
          <div className="formContainer">
            <label htmlFor='peso' >Seu peso</label>
            <input type="number" id='peso' className='form_input' onBlur={e => setPeso(e.target.value)} placeholder='Em kg'/>
            <button type='button' className='form_btn' onClick={calculaIMC}>Calcular</button>
          </div>
        </form>
      </div>
      <Tabela resultado={resultado}/>
      <Resultado resultado={resultado}/>
    </>
  )
}

export default App
