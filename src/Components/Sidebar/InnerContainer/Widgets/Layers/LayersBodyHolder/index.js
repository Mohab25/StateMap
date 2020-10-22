import React,{Fragment,useState} from 'react'
import ContentColorPicker from '../LayersColorPickers/LayerContentColor/index'
import OutlineColorPicker from '../LayersColorPickers/LayersOutlineColor/index'
import Label from '../LayersLabels/index'
import {LayerBodyHolder,LayerNameHolder,LayerName,LayerToggleIcon} from './styles/styles'

export default function Index() {
    let [bodyHeight,setHeight]=useState('50'); 
    let [overflow,setOverflow] = useState('hidden');
    let [Icon,setIcon] = useState('icon-plus')
    let toggleHeightAndOverflow=()=>{
        /**
         * set the height of the settings container and toggle plus-minus icon. 
         */
        if(bodyHeight==='380'){
            // if the height is 380, minimize it and toggle the icon className. 
            setHeight('50');
            setOverflow('hidden');
            setIcon('icon-plus')
        }
        else if(bodyHeight==='50'){
            // if the height is 50, maximize it and toggle the icon className. 
            setHeight('380')
            setIcon('icon-check-minus')
        }
    }

    
    
    return (
        <Fragment>
            <LayerBodyHolder height={bodyHeight} overFlow={overflow}>
                <LayerNameHolder onClick={toggleHeightAndOverflow}>
                    <LayerName>Color Scheme</LayerName>
                    <LayerToggleIcon className={Icon}></LayerToggleIcon>
                </LayerNameHolder>
                <ContentColorPicker/>
                <OutlineColorPicker/>
                <Label/>
            </LayerBodyHolder>
        </Fragment>
    )
}
