import {createContext,useReducer} from 'react'
import {Reducer,initialState} from './reducer'
export const statecontext=createContext();
export const Store=(props)=>{
    const [state,dispatch]=useReducer(Reducer,initialState);
return(
    <statecontext.Provider value={[state,dispatch]}>
    {props.children}
</statecontext.Provider>
)
}