import React,{Fragment,useState} from 'react'
import '../../../../../../assets/font-awesome/css/font-awesome.css'
import {TilesBodyHolder,TilesNameHolder,TilesName,TilesToggleIcon} from './styles/styles'
import TilePicker from '../TilesPickers/TilesPicker'


export default function Index() {
    let [bodyHeight,setHeight]=useState('50'); 
    let [overflow,setOverflow] = useState('hidden');
    let [Icon,setIcon] = useState('icon-plus')
    let toggleHeightAndOverflow=()=>{
        if(bodyHeight==='380'){
            setHeight('50');
            setOverflow('hidden');
            setIcon('icon-plus')
        }
        else if(bodyHeight==='50'){
            setHeight('380')
            setIcon('icon-check-minus')
        }
    }

    
    
    return (
        <Fragment>
            <TilesBodyHolder height={bodyHeight} overFlow={overflow}>
                <TilesNameHolder onClick={toggleHeightAndOverflow}>
                    <TilesName>Tiles</TilesName>
                    <TilesToggleIcon><i className={Icon}></i></TilesToggleIcon>
                </TilesNameHolder>
                <TilePicker/>
            </TilesBodyHolder>
            
        </Fragment>
    )
}
