import {ClosestFacilityComputerRemoveJson} from '../../types';

export const removeJson=(switcher)=>{
    return {
        type:ClosestFacilityComputerRemoveJson,
        payload:switcher
    }
}
