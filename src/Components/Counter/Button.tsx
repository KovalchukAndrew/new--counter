import React from "react";

export type ButtonPropsType = {

    title: string
    callBack: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const useButton = () => {
        props.callBack()
    }
    return <div>
        <button
            className={props.disabled ? "disabled" : "button"}
            disabled={props.disabled}
            onClick={useButton}
        >{props.title}</button>
    </div>
}