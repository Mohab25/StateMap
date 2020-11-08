// this action is about adding coordinates when a user clicks on the map, it is used to
// compute the shortest path... 
import {ClosestFacilityComputer} from '../../types'

export const changeCoords=(coordsOb)=>dispatch=>{
    dispatch(
        {
        type:ClosestFacilityComputer,
        payload:coordsOb
    }   )
    
}