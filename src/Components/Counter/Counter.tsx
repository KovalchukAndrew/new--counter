import React, {useEffect, useState} from "react";
import {Button} from "./Button";
import {Display} from "./Display";
import '../../App.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Store";
import {IncValueAC, ResetCounterAC} from "../../Redux/Reducer";


export type CounterPropsType = {
    /*valueToIncrement: number
    maxValue: number*/
    isSettingsInvalid: boolean
    /*incValue: () => void
    resetCounter: () => void*/
    counterToSettings: () => void
}

export const Counter = (props:CounterPropsType) => {
    let valueToIncrement = useSelector<AppRootStateType, number> (state => state.counter.value)
    let maxValue = useSelector<AppRootStateType, number> (state => state.counter.maxValue)
    const dispatch = useDispatch()
    let [isIncButtonDisabled, setIsIncButtonDisabled] = useState<boolean>(false)

    useEffect(() => {
        setIsIncButtonDisabled(valueToIncrement >= maxValue);
    }, [valueToIncrement, maxValue])

    const incValue = () => {
        /*let newValueToIncrement = valueToIncrement + 1;*/
        dispatch(IncValueAC())
    }
    const resetCounter = () => {
        /*setValueToIncrement(parseInt(localStorage.getItem('counterValue') || '0'))*/
        dispatch(ResetCounterAC())
    }


    return <div className="counter">
        <div>
            <Display
                value={valueToIncrement}
                isSettingsInvalid={props.isSettingsInvalid}
                maxValue={maxValue}
            />
        </div>
        <div className={"buttons"}>
            <Button
                callBack={incValue}
                title={"Inc"}
                disabled={isIncButtonDisabled}
            />
            <Button
                callBack={resetCounter}
                title={"Reset"}
            />
            <Button title={"Settings"} callBack={props.counterToSettings}
            />
        </div>
    </div>
}