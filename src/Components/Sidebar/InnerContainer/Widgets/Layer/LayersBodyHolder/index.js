import React,{Fragment,useState} from 'react'
import '../../../../../../assets/font-awesome/css/font-awesome.css'
import ContentColorPicker from '../LayersColorPickers/LayerContentColor/index'
import OutlineColorPicker from '../LayersColorPickers/LayersOutlineColor/index'
import Label from '../LayersLabels/index'
import {LayerBodyHolder,LayerNameHolder,LayerName,LayerToggleIcon} from './styles/styles'

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
            <LayerBodyHolder height={bodyHeight} overFlow={overflow}>
                <LayerNameHolder onClick={toggleHeightAndOverflow}>
                    <LayerName>Color Schemes</LayerName>
                    <LayerToggleIcon className={Icon}></LayerToggleIcon>
                </LayerNameHolder>
                <ContentColorPicker/>
                <OutlineColorPicker/>
                <Label/>
            </LayerBodyHolder>
        </Fragment>
    )
}
