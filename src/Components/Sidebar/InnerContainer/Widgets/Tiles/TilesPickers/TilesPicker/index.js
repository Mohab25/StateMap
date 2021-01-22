import React,{Fragment} from 'react'
import {SidebarTilesPickerContainer,SidebarTilesPickerText,SidebarTilesPickerDiv} 
from './styles/styles'
import {useDispatch} from 'react-redux'
import img1 from '../images/Dark.jpg'
import img2 from '../images/Light.jpg'
import img3 from '../images/Topo.jpg'

import { changeTile } from "../../../../../../../Actions/ActionsCreators/TileChange/ChangeTile";
import { colorChanger } from "../../../../../../../Actions/ActionsCreators/LayerColorChange";


export default function Index() {
    let dispatch = useDispatch()
    let ChangeTile=(Theme)=>{
        switch(Theme){
            case 'Dark Theme':dispatch(changeTile('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'));dispatch(colorChanger('blue'));break; 
            case 'Light Theme':dispatch(changeTile('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'));dispatch(colorChanger('red'));break; 
            case 'Topo Theme': dispatch(changeTile('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'));dispatch(colorChanger('red'));break;
        }
    }
    
    const imgs = [[img1,'Dark Theme'],[img2,'Light Theme'],[img3,'Topo Theme']]
    const TileContent = imgs.map((content,index)=>
        <Fragment key={index}>
        <SidebarTilesPickerText>{content[1]}</SidebarTilesPickerText>
        <SidebarTilesPickerDiv onClick={()=>ChangeTile(content[1])} background={content[0]}></SidebarTilesPickerDiv>
        </Fragment>
        )
    return (
        <>
            <SidebarTilesPickerContainer>
                {TileContent}
            </SidebarTilesPickerContainer>
        </>
    )
}
