import {ChangeTile} from '../Actions/types'

const State = {Tile:'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'};

export default function LayerColorReducer(state=State,action){
    switch(action.type){
        case ChangeTile:return{
            ...state,
            Tile:action.payload
        }
        default:return(state)
    }
}