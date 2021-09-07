import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

function App() {
  let [maxValue, setMaxValue] = useState(5);
  let [value, setValue] = useState<number>(0);
  let [error, setError] = useState(false);
  useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue')
    let maxValueAsString = localStorage.getItem('setMax')
    /*let newError = localStorage.getItem('error')*/

    if (valueAsString && maxValueAsString) {
      let newValue = JSON.parse(valueAsString)
      let newMax = JSON.parse(maxValueAsString)
      setValue(newValue)
      setMaxValue(newMax)
      if (newValue >= newMax)
        setError(true)
    }

  }, [])
  useEffect(() => {
    localStorage.setItem('error', JSON.stringify(error))
    localStorage.setItem('counterValue', JSON.stringify(value))
    localStorage.setItem('setMax', JSON.stringify(maxValue))

  })
  const incValue = () => {
    setValue(value + 1)
    if (value>=maxValue-1) {
      setError(true)
    }
  }
  const resetCounter = () => {
    setValue(value = 0)

    value>=maxValue ? setError(true): setError(false)

  }
  const getValues = (newStart:number, newMaxValue:number) => {
    setValue(newStart)
    setMaxValue(newMaxValue)
    newStart>=newMaxValue-1?setError(true):setError(false)


  }
  return (
      <div className="App">
        <Counter
            value={value}
            maxValue={maxValue}
            error={error}
            incValue={incValue}
            resetCounter={resetCounter}
        />
        <Settings
            maxValue={maxValue}
            value={value}
            getValues={getValues}
        />
      </div>
  );
}

export default App;