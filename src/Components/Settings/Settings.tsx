import React, {useState} from "react";
import '../../App.css';
import {Button} from "../Counter/Button";

export type SettingsPropsType = {
    maxValue: number
    value: number
    getValues: (newStart: number, newMaxValue: number) => void
}
export const Settings = (props:SettingsPropsType) => {
    let [start, setStart] = useState<string>("0")
    let [maxValue, setMaxValue] = useState<string>("0")

    const onGetValues = () => {
        let newstart = JSON.parse(start)
        let newMaxValue = JSON.parse(maxValue)
        props.getValues(newstart, newMaxValue)
    }

    return <div className={"counter"}>
        <div className={"display"}>
            <span>
             <span className={"inputtitle"}>max value: </span>
             <input type={"number"} max={10} min={0} className={"input"}
                    onChange={(e) => setMaxValue(e.currentTarget.value)}
             />
        </span>
            <span>
             <span className={"inputtitle"}>start value: </span>
            <input type={"number"} max={10} min={0}  className={"input"}
                   onChange={(e) => setStart(e.currentTarget.value)}
            />
        </span>
        </div>

        <div className={"buttons"}>
            <Button title={"set"} callBack={onGetValues}/>
        </div>

    </div>


}