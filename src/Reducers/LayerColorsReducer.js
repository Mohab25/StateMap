import {FillColorChange,OutlineColorChange} from '../Actions/types'

const State = {fillColor:'blue',OutlineColor:'none'};

export default function LayerColorReducer(state=State,action){
    switch(action.type){
        case FillColorChange:return{
            ...state,
            fillColor:action.payload
        }
        case OutlineColorChange:return{
            ...state,
            OutlineColor:action.payload
        }
        default:return(state)
    }
}