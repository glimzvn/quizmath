import React, { useEffect, useState } from 'react';
import Timer from '../Timer';
import styles from './styles.module.scss';

function Sum() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(0);
  const [randomValue, setRandomValue] = useState([]);
  const [results, setResults] = useState([]);
  const [answer, setAnswer] = useState("");



  useEffect(() => {
    setNumberOne(Math.floor(Math.random() * 60));
    setNumberTwo(Math.floor(Math.random() * 60));
  }, []);

  useEffect(() => {
    setSum(numberOne + numberTwo);
    const array = [...Array(3)].map(()=>Math.floor(Math.random() * 60));
    setRandomValue(array);
  }, [numberOne, numberTwo]);

  useEffect(() => {
    setResults([...randomValue, sum])
  }, [sum, randomValue])

  const handleClick = (target) => {
    if(Number(target.value) === sum) {
      setAnswer(target.value);
      setTimeout(() => {
        setNumberOne(Math.floor(Math.random() * 60));
        setNumberTwo(Math.floor(Math.random() * 60));
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
            <span> + </span>
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

export default Sum;
