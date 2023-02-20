import React, { useState } from 'react';
import './App.css'

function App() {

  const [primes, setPrimes] = useState([]);

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num !== 1 && num !== 0;
      }
     
      
      function generatePrimes(n) {
          const newPrimes = [];
          for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
             newPrimes.push(i);
            }
          }
          setPrimes(newPrimes);
        }  




  return (
    <div className="App">
  <h1>Prime Number Generator</h1>
           <input data-testid="number-input" type="number" onChange={(e) => generatePrimes(e.target.value)} />
      <table className='table-container'>
      <thead>
          <tr data-testid='result'>
            <p></p>
            {primes.map((prime, index) => (<th key={index}>{prime}</th>))}
          </tr>
          </thead>
        <tbody id='table-content'>
          {primes.map((prime, primer) => (
            <tr key={primer}>
              <th>{prime}</th>
              {primes.map((secondPrime, primers) =>(
                <td key={primers}>{secondPrime * prime}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  );
}

export default App;
