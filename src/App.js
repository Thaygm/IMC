import React, { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      const pesoNumerico = parseFloat(peso.replace(',', '.'));
      const alturaMetros = altura / 100;
      const imcCalculado = (pesoNumerico / (alturaMetros * alturaMetros)).toFixed(2);
      setIMC(imcCalculado);
      classificarIMC(imcCalculado);
    } else {
      setIMC(null);
      setClassificacao('');
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Baixo Peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassificacao('Peso Adequado');
    } else if (imc >= 25 && imc <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setClassificacao('Obesidade Grau 1');
    } else if (imc >= 35 && imc <= 39.9) {
      setClassificacao('Obesidade Grau 2');
    } else if (imc >= 40) {
      setClassificacao('Obesidade Extrema');
    }
  };

  return (
    <div className="Calculadora">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Peso (kg):</label>
        <input
          type="text"
          value={peso}
          placeholder='Digite seu peso'
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d+(\.\d{0,2})?$/.test(value) || value === '') {
              setPeso(value);
            }
          }}
        />
      </div>
      <div>
        <label>Altura (cm):</label>
        <input
          type="number"
          value={altura}
          placeholder='Digite sua altura em cm'
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && <p>Seu IMC é: {imc}</p>}
      {classificacao && <p>Classificação: {classificacao}</p>}
    </div>
  );
}

export default App;
