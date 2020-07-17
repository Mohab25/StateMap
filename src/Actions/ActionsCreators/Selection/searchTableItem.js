import {SearchTableItem} from '../../types';
import Data from '../../../Components/Map/Selected_Areas.geojsonl.json'

export const searchTableItem=(Name)=>{
    console.log('Action Search Table:',Name)
    return {
        type:SearchTableItem,
        payload:Name
    }
}
