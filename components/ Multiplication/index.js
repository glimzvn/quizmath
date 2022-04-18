import React, { useEffect, useState } from 'react';
import Timer from '../Timer';
import styles from './styles.module.scss';

function Multiplication() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [counter, setCounter] = useState(0);
  const [multiplication, setMultiplication] = useState(0);
  const [randomValue, setRandomValue] = useState([]);
  const [results, setResults] = useState([]);
  const [answer, setAnswer] = useState("");



  useEffect(() => {
    setNumberOne(Math.floor(Math.random() * 15));
    setNumberTwo(Math.floor(Math.random() * 15));
  }, []);

  useEffect(() => {
    setMultiplication(numberOne * numberTwo);
    const array = [...Array(3)].map(()=>Math.floor(Math.random() * 210));
    setRandomValue(array);
  }, [numberOne, numberTwo]);

  useEffect(() => {
    setResults([...randomValue, multiplication])
  }, [multiplication, randomValue])

  const handleClick = (target) => {
    if(Number(target.value) === multiplication) {
      setAnswer(target.value);
      setTimeout(() => {
        setNumberOne(Math.floor(Math.random() * 15));
        setNumberTwo(Math.floor(Math.random() * 15));
        setAnswer('')
        setCounter(counter + 1)
      }, 300);
    };
  };
  
  return (
      <div className={styles.container}>
          <h4>{counter} / 10</h4>
          <Timer counter={counter} setCounter={setCounter}/>
          <div className={styles.sum}>
            <span>{numberOne}</span>
            <span> x </span>
            <span>{numberTwo} = </span>
            <span>{answer}</span>
          </div>
          <div className={styles.results}>
            {results.sort(()=> Math.random() - 0.5).map((result, index) => (
              <button 
                value={result}
                onClick={({target}) => handleClick(target)}
                key={index}>
                {result}
              </button>
            ))}
          
          </div>
        </div>
   
  );
}

export default Multiplication;

