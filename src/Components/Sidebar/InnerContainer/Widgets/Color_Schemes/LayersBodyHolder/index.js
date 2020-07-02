import React,{Fragment,useState} from 'react'
import ContentColorPicker from '../LayersColorPickers/LayerContentColor/index'
import OutlineColorPicker from '../LayersColorPickers/LayersOutlineColor/index'
import Label from '../LayersLabels/index'
import {LayerBodyHolder,LayerNameHolder,LayerName,LayerToggleIcon} from './styles/styles'

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
            <LayerBodyHolder height={bodyHeight} overFlow={overflow}>
                <LayerNameHolder onClick={toggleHeightAndOverflow}>
                    <LayerName>Color Schemes</LayerName>
                    <LayerToggleIcon>^</LayerToggleIcon>
                </LayerNameHolder>
                <ContentColorPicker/>
                <OutlineColorPicker/>
                <Label/>
            </LayerBodyHolder>
        </Fragment>
    )
}
