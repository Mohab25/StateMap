import {ToggleMapView} from '../../types';

export const toggleMapView=()=>{
    return {
        type:ToggleMapView,
        payload:'Map'
    }
}