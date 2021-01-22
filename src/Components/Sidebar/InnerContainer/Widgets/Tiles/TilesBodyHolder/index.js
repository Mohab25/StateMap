import React,{Fragment,useState} from 'react'
import '../../../../../../assets/font-awesome/css/font-awesome.css'
import {TilesBodyHolder,TilesNameHolder,TilesName,TilesToggleIcon} from './styles/styles'
import TilePicker from '../TilesPickers/TilesPicker'


export default function Index() {
    let [bodyHeight,setHeight]=useState('50'); 
    let [Icon,setIcon] = useState('icon-plus')
    let toggleHeightAndIcon=()=>{
        if(bodyHeight==='380'){
            setHeight('50');
            setIcon('icon-plus')
        }
        else if(bodyHeight==='50'){
            setHeight('380')
            setIcon('icon-check-minus')
        }
    }

    
    
    return (
        <>
            <TilesBodyHolder height={bodyHeight}>
                <TilesNameHolder onClick={toggleHeightAndIcon}>
                    <TilesName>Tiles</TilesName>
                    <TilesToggleIcon><i className={Icon}></i></TilesToggleIcon>
                </TilesNameHolder>
                <TilePicker/>
            </TilesBodyHolder>
            
        </>
    )
}
