import React, {useEffect, useState} from "react";
import '../../App.css';
import {Button} from "../Counter/Button";

export type SettingsPropsType = {
    maxValue: number
    valueToIncrement: number
    setNewValuesCallback: (newStartValue: number, newMaxValue: number) => void
    setIsSettingsInvalidCallback: (isSettingsInvalid: boolean) => void
}
export const Settings = (props:SettingsPropsType) => {
    let [startValue, setStartValue] = useState<number>(props.valueToIncrement)
    let [maxValue, setMaxValue] = useState<number>(props.maxValue)
    let [isSetButtonDisabled, setIsSetButtonDisabled] = useState<boolean>(props.valueToIncrement >= props.maxValue)

    useEffect(() => {
        props.setIsSettingsInvalidCallback(startValue >= maxValue);
        setIsSetButtonDisabled(startValue >= maxValue);
    }, [startValue, maxValue])

    const callSetNewValueCallback = () => {
        props.setNewValuesCallback(startValue, maxValue)
    }

    return <div className={"counter"}>
        <div className={"display"}>
            <span>
             <span className={"inputtitle"}>max value: </span>
             <input type={"number"} max={10} min={0} className={"input"} value={maxValue}
                    onChange={(e) => setMaxValue(parseInt(e.currentTarget.value))}
             />
        </span>
            <span>
             <span className={"inputtitle"}>start value: </span>
            <input type={"number"} max={10} min={0}  className={"input"} value={startValue}
                   onChange={(e) => setStartValue(parseInt(e.currentTarget.value))}
            />
        </span>
        </div>

        <div className={"buttons"}>
            <Button title={"set"} callBack={callSetNewValueCallback} disabled={isSetButtonDisabled}/>
        </div>

    </div>


}