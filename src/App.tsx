import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/Store";
import {SetCounterToSettingsAC} from "./Redux/Reducer";


function App() {
    let counterToSettings = useSelector<AppRootStateType, boolean>(state => state.counter.counterToSettings)
    const dispatch = useDispatch()

    let [isSettingsInvalid, setIsSettingsInvalid] = useState(false);

    const updateIsSettingsInvalid = (isSettingsInvalid: boolean) => {
        setIsSettingsInvalid(isSettingsInvalid)
    }

    function changeCounterToSettings() {
        dispatch(SetCounterToSettingsAC())
    }

    return (
        <div className="App">
            {counterToSettings && <Counter
                isSettingsInvalid={isSettingsInvalid}
                counterToSettings={changeCounterToSettings}
            />}
            {!counterToSettings && <Settings
                setIsSettingsInvalidCallback={updateIsSettingsInvalid}
            />}
        </div>
    );
}

export default App;