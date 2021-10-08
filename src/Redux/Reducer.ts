export type ActionType = IncValueActionType | ResetCounterActionType | SetCounterActionType | SetCounterToSettingsActionType | SetStartActionType | SetMaxActionType
export type IncValueActionType = ReturnType<typeof IncValueAC>
export type ResetCounterActionType = ReturnType<typeof ResetCounterAC>
export type SetCounterActionType = ReturnType<typeof SetCounterAC>
export type SetCounterToSettingsActionType = ReturnType<typeof SetCounterToSettingsAC>
export type SetStartActionType = ReturnType<typeof SetStartAC>
export type SetMaxActionType = ReturnType<typeof SetMaxAC>

const initialState = {
    value: 0,
    startValue: 0,
    maxValue: 5,
    counterToSettings: false,
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {
                ...state, value: state.value + 1
            }
        case 'RESET-VALUE':
            return {
                ...state, value: state.startValue /*Number(localStorage.getItem('counterValue'))*/
            }
        case 'SET-VALUE':
            return {
                ...state, startValue: action.startValue, value: action.startValue, maxValue: action.maxValue /*Number(localStorage.getItem('counterValue'))*/
            }
        case 'SET-COUNTER-TO-SETTINGS':
            return {
                ...state, counterToSettings: !state.counterToSettings
            }
        case 'SET-START':
            return {
                ...state, startValue: +action.value
            }
        case 'SET-MAX':
            return {
                ...state, maxValue: +action.value
            }
        default:
            return state
    }
}

export const IncValueAC = () => (
    {type: 'INC-VALUE'} as const
)
export const ResetCounterAC = () => (
    {type: 'RESET-VALUE'} as const
)

export const SetCounterAC = (startValue:number, maxValue:number) => (
    {type: 'SET-VALUE', startValue, maxValue} as const
)
export const SetCounterToSettingsAC = () => (
    {type: 'SET-COUNTER-TO-SETTINGS'} as const
)
export const SetStartAC = (value: string) => (
    {type: 'SET-START', value} as const
)
export const SetMaxAC = (value: string) => (
    {type: 'SET-MAX', value} as const
)


