import {SearchItemClicked} from '../../types';

export const searchItem=(matchedItem)=>{
    console.log('Action:',matchedItem)
    return {
        type:SearchItemClicked,
        payload:matchedItem
    }
}

// the idea is to get the name, and according to it get the coord of the polygon and 
// then fly to it . 
