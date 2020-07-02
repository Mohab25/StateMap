import {ChangeTile} from '../../types';

export const changeTile=(Tileprovider)=>{
    return {
        type:ChangeTile,
        payload:Tileprovider
    }
}