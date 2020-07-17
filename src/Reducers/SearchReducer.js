import {SearchItemClicked} from '../Actions/types'
import {SearchTableItem} from '../Actions/types'

const State = {MatchedItem:[],Name:''};

export default function LayerColorReducer(state=State,action){
    switch(action.type){
        case SearchItemClicked:console.log('Search Reducer:',action.payload);return{
            ...state,
        MatchedItem:action.payload
        }
        case SearchTableItem:return{...state,Name:action.payload};

        default:return(state)
    }
}