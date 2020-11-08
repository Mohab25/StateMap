import {ClosestFacilityComputer} from '../Actions/types'
import {ClosestFacilityComputerRemoveJson} from '../Actions/types'

let State={
    // the coords got from the map and sent to the server to compute 
    coords:{},   
    switcher:'off',
} 

export default function ClosestFacilityReducer(state=State,action){
    switch(action.type){
        case ClosestFacilityComputer:return{
            ...state,
            coords:{...state.coords,coords:action.payload}
        }
        case ClosestFacilityComputerRemoveJson:return{
            ...state,
            switcher:action.payload
        }

        default:return{state}
    }
}
