import React from "react";
import '../../App.css'


export type DisplayPropsType = {
    value: number
    maxValue: number
    isSettingsInvalid: boolean
}

export const Display = (props: DisplayPropsType) => {

    return <div className={"display"}>
        {props.isSettingsInvalid && <span className="error">Setting Invalid</span>}
        {!props.isSettingsInvalid && <span className={props.value===props.maxValue? "error" : "text"}>{props.value}</span>}
    </div>
}