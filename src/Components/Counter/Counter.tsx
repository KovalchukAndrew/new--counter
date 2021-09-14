import React, {useEffect, useState} from "react";
import {Button} from "./Button";
import {Display} from "./Display";
import '../../App.css'


export type CounterPropsType = {
    valueToIncrement: number
    maxValue: number
    isSettingsInvalid: boolean
    incValue: () => void
    resetCounter: () => void
    /*counterToSettings: () => void*/
}

export const Counter = (props:CounterPropsType) => {
    let [isIncButtonDisabled, setIsIncButtonDisabled] = useState<boolean>(false)

    useEffect(() => {
        setIsIncButtonDisabled(props.valueToIncrement >= props.maxValue);
    }, [props.valueToIncrement, props.maxValue])

    return <div className="counter">
        <div>
            <Display
                value={props.valueToIncrement}
                isSettingsInvalid={props.isSettingsInvalid}
                maxValue={props.maxValue}
            />
        </div>
        <div className={"buttons"}>
            <Button
                callBack={props.incValue}
                title={"Inc"}
                disabled={isIncButtonDisabled}
            />
            <Button
                callBack={props.resetCounter}
                title={"Reset"}
            />
            {/*<Button title={"Settings"} callBack={props.counterToSettings}
            />*/}
        </div>
    </div>
}