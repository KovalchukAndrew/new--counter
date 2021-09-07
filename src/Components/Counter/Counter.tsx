import React, {useEffect, useState} from "react";
import {Button} from "./Button";
import {Display} from "./Display";
import '../../App.css'


export type CounterPropsType = {
    maxValue: number
    error: boolean
    value: number
    incValue: () => void
    resetCounter: () => void
}

export const Counter = (props:CounterPropsType) => {
    return <div className="counter">
        <div>
            <Display
                value={props.value}
                maxValue={props.maxValue}
            />
        </div>
        <div className={"buttons"}>
            <Button
                callBack={props.incValue}
                title={"Inc"}
                error={props.error}
            />
            <Button
                callBack={props.resetCounter}
                title={"Reset"}
            />
        </div>
    </div>
}