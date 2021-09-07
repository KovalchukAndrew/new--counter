import React from "react";
import '../../App.css'


export type DisplayPropsType = {
    value: number
    maxValue: number
}

export const Display = (props: DisplayPropsType) => {

    return <div className={"display"}>
        <span className={props.value===props.maxValue? "error" : "text"}>{props.value}</span>
    </div>
}