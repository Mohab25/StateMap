import {SearchItemClicked} from '../../types';
import Data from '../../../Components/Map/Selected_Areas.geojsonl.json'

export const searchItem=(coords)=>{
    console.log('Action:',coords)
    return {
        type:SearchItemClicked,
        payload:coords
    }
}

// the idea is to get the name, and according to it get the coord of the polygon and 
// then fly to it . 
