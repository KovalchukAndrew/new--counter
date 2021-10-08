import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/Store";
import {IncValueAC, ResetCounterAC, SetCounterAC, SetCounterToSettingsAC} from "./Redux/Reducer";


function App() {
  //let valueToIncrement = useSelector<AppRootStateType, number> (state => state.counter.value)
  //let maxValue = useSelector<AppRootStateType, number> (state => state.counter.maxValue)
  let counterToSettings = useSelector<AppRootStateType, boolean> (state => state.counter.counterToSettings)
  const dispatch = useDispatch()
  /*let [maxValue, setMaxValue] = useState(parseInt(localStorage.getItem('setMax') || '5'));*/
  /*let [valueToIncrement, setValueToIncrement] = useState<number>(parseInt(localStorage.getItem('counterValue') || '0'));*/
  let [isSettingsInvalid, setIsSettingsInvalid] = useState(false);
  /*let [counterToSettings, setCounterToSettings] = useState<boolean>(true)*/

  /*const incValue = () => {
    /!*let newValueToIncrement = valueToIncrement + 1;*!/
    dispatch(IncValueAC())
  }
*/
  /*const resetCounter = () => {
    /!*setValueToIncrement(parseInt(localStorage.getItem('counterValue') || '0'))*!/
    dispatch(ResetCounterAC())
  }
*/
  /*const setNewValues = (newStartValue: number, newMaxValue: number) => {
    //setCounterToSettings(true)
    dispatch(SetCounterToSettingsAC())
    /!*setValueToIncrement(newStartValue)*!/
    /!*setLocalStorage(newStartValue, newMaxValue);*!/
    dispatch(SetCounterAC(newStartValue, newMaxValue))
    /!*setMaxValue(newMaxValue)*!/


  }*/

  const updateIsSettingsInvalid = (isSettingsInvalid: boolean) => {
    setIsSettingsInvalid(isSettingsInvalid)
  }

  /*function setLocalStorage(newCounterValue: number, newMaxValue: number) {
    localStorage.setItem('counterValue', JSON.stringify(newCounterValue))
    localStorage.setItem('setMax', JSON.stringify(newMaxValue))
  }*/
  function changeCounterToSettings() {
    //setCounterToSettings(false);
    dispatch(SetCounterToSettingsAC())
  }

  return (
      <div className="App">
        {counterToSettings && <Counter
            /*valueToIncrement={valueToIncrement}
            maxValue={maxValue}*/
            isSettingsInvalid={isSettingsInvalid}
            /*incValue={incValue}
            resetCounter={resetCounter}*/
            counterToSettings={changeCounterToSettings}
        />}
        {!counterToSettings && <Settings
            //maxValue={maxValue}
            //valueToIncrement={valueToIncrement}
            //setNewValuesCallback={setNewValues}
            setIsSettingsInvalidCallback={updateIsSettingsInvalid}

        />}
      </div>
  );
}

export default App;