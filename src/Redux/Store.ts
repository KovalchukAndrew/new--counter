import {combineReducers, createStore} from "redux";
import {counterReducer} from "./Reducer";

export const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState
const persistedString = localStorage.getItem('state')
if (persistedString) {
    preloadedState = JSON.parse(persistedString)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
    localStorage.setItem('counterValue', JSON.stringify(store.getState().counter.startValue))
    localStorage.setItem('setMax', JSON.stringify(store.getState().counter.maxValue))

})

export type AppRootStateType = ReturnType<typeof rootReducer>