import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

function App() {
  let [maxValue, setMaxValue] = useState(parseInt(localStorage.getItem('setMax') || '5'));
  let [valueToIncrement, setValueToIncrement] = useState<number>(parseInt(localStorage.getItem('counterValue') || '0'));
  let [isSettingsInvalid, setIsSettingsInvalid] = useState(false);

  const incValue = () => {
    const newValueToIncrement = valueToIncrement + 1;
    setValueToIncrement(newValueToIncrement)
  }

  const resetCounter = () => {
    setValueToIncrement(parseInt(localStorage.getItem('counterValue') || '0'))
  }

  const setNewValues = (newStartValue: number, newMaxValue: number) => {
    setValueToIncrement(newStartValue)
    setMaxValue(newMaxValue)
    setLocalStorage(newStartValue, newMaxValue);
  }

  const updateIsSettingsInvalid = (isSettingsInvalid: boolean) => {
    setIsSettingsInvalid(isSettingsInvalid)
  }

  function setLocalStorage(newCounterValue: number, newMaxValue: number) {
    localStorage.setItem('counterValue', JSON.stringify(newCounterValue))
    localStorage.setItem('setMax', JSON.stringify(newMaxValue))
  }

  return (
      <div className="App">
        <Counter
            valueToIncrement={valueToIncrement}
            maxValue={maxValue}
            isSettingsInvalid={isSettingsInvalid}
            incValue={incValue}
            resetCounter={resetCounter}
        />
        <Settings
            maxValue={maxValue}
            valueToIncrement={valueToIncrement}
            setNewValuesCallback={setNewValues}
            setIsSettingsInvalidCallback={updateIsSettingsInvalid}
        />
      </div>
  );
}

export default App;