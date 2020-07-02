import {ToggleMapView,ToggleDataView} from '../Actions/types'

const State = {View:'Map'};

export default function  ToggleViewReducer(state=State,action){
    switch(action.type){
        case ToggleMapView:return{
            ...state, 
            View:action.payload
        }
        case ToggleDataView:return{
            ...state,
            View:action.payload
        }
        default:return {...state}
    }
}