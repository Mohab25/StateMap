import React,{Fragment,useState} from 'react'
import {TilesBodyHolder,TilesNameHolder,TilesName,TilesToggleIcon} from './styles/styles'
import TilePicker from '../TilesPickers/TilesPicker'
export default function Index() {
    let [bodyHeight,setHeight]=useState('50'); 
    let [overflow,setOverflow] = useState('hidden');

    let toggleHeightAndOverflow=()=>{
        if(bodyHeight==='380'){
            setHeight('50');
            setOverflow('hidden');
        }
        else if(bodyHeight==='50'){
            setHeight('380')
        }
    }

    
    
    return (
        <Fragment>
            <TilesBodyHolder height={bodyHeight} overFlow={overflow}>
                <TilesNameHolder onClick={toggleHeightAndOverflow}>
                    <TilesName>Tiles</TilesName>
                    <TilesToggleIcon>^</TilesToggleIcon>
                </TilesNameHolder>
                <TilePicker/>
            </TilesBodyHolder>
            
        </Fragment>
    )
}
