import {SearchItemClicked} from '../Actions/types'

const State = {Coords:[]};

export default function LayerColorReducer(state=State,action){
    switch(action.type){
        case SearchItemClicked:console.log('Search Reducer:',action.payload);return{
            ...state,
        Coords:action.payload
        }
        default:return(state)
    }
}