import {SearchTableItem} from '../../types';

export const searchTableItem=(Name)=>{
    console.log('Action Search Table:',Name)
    return {
        type:SearchTableItem,
        payload:Name
    }
}
