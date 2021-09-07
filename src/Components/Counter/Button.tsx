import React from "react";

export type ButtonPropsType = {

    title: string
    callBack: () => void
    error?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const useButton = () => {
        props.callBack()
    }
    return <div>
        <button
            className={props.error? "disabled" :"button"}
            disabled={props.error && props.title==="Inc"}
            onClick={useButton}
        >{props.title}</button>
    </div>
}