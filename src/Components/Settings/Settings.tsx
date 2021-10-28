import React, {ChangeEvent, useEffect, useState} from "react";
import '../../App.css';
import {Button} from "../Counter/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Store";
import {SetCounterAC, SetCounterToSettingsAC, SetMaxAC, SetStartAC} from "../../Redux/Reducer";

export type SettingsPropsType = {
    setIsSettingsInvalidCallback: (isSettingsInvalid: boolean) => void
}
export const Settings = (props: SettingsPropsType) => {
    let startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    let valueToIncrement = useSelector<AppRootStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()
    let [isSetButtonDisabled, setIsSetButtonDisabled] = useState<boolean>(valueToIncrement >= maxValue)

    useEffect(() => {
        props.setIsSettingsInvalidCallback(startValue >= maxValue);
        setIsSetButtonDisabled(startValue >= maxValue);
    }, [startValue, maxValue])

    const SetNewValues = () => {
        dispatch(SetCounterToSettingsAC())
        dispatch(SetCounterAC(startValue, maxValue))
    }
    const onStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetStartAC(e.currentTarget.value))
    }
    const onMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetMaxAC(e.currentTarget.value))
    }

    return <div className={"counter"}>
        <div className={"display"}>
            <span>
             <span className={"inputtitle"}>max value: </span>
             <input type={"number"} max={10} min={0} className={"input"} value={maxValue}
                    onChange={onMax}
             />
        </span>
            <span>
             <span className={"inputtitle"}>start value: </span>
            <input type={"number"} max={10} min={0} className={"input"} value={startValue}
                   onChange={onStart}
            />
        </span>
        </div>

        <div className={"buttons"}>
            <Button title={"set"} callBack={SetNewValues} disabled={isSetButtonDisabled}/>
        </div>

    </div>

}