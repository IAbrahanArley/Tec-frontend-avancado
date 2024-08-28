import React from 'react';
import './App.css';
import Adicao from './components/Adicao';
import Subtracao from './components/Subtracao'; 
import Divisao from './components/Divisao'; 
import Multiplicacao from './components/Multiplicacao'; 
import PrecisoEstudar from './components/PrecisoEstudar'; 

function App() {
  return (
    <>
      <div>
        <Adicao num1={5} num2={7} />
        <Subtracao num1={5} num2={7} />
        <Divisao num1={10} num2={2} />
        <Multiplicacao num1={5} num2={7} />
        <PrecisoEstudar nomeDaTecnologia="Docker" />
        <PrecisoEstudar nomeDaTecnologia="Aws" />
        <PrecisoEstudar nomeDaTecnologia="Junit" />
        <PrecisoEstudar nomeDaTecnologia="React" />
      </div>
    </>
  );
}

export default App;
