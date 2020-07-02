import React,{Fragment,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux' 
import {SidebarInnerColorOutlinePickerContainer,SidebarInnerOulineColorPickerText,
SidebarInnerOutlineColorPickerDiv} from './styles/styles'
import {ColorPalette,ColorPickedContainer,ColorPicked} from '../LayerContentColor/styles/styles'
import {OutlinecolorChanger} from '../../../../../../../Actions/ActionsCreators/LayerOutlineColorChange'
import { OutlineColorChange } from '../../../../../../../Actions/types'


export default function Index() {
    const [Renderer,setRenderer] = useState(''); 
    const [colorSet1,SetColors1] = useState(['white','black','grey']); 
    const [colorSet2,SetColors2] = useState(['green','blue','red']);
    const OutlineColor = useSelector(state=>state.LayerColors.OutlineColor);
    const fillColor =  useSelector(state=>state.LayerColors.fillColor);
    const dispatch = useDispatch();

    let colorPalette=()=>{
        if(Renderer===''){
        setRenderer('Color Palete');
        }
        else{
            setRenderer('')
        }
    }


    if(Renderer===''){

    return (
        <Fragment>
        <SidebarInnerColorOutlinePickerContainer>    
            <SidebarInnerOulineColorPickerText>Outline color</SidebarInnerOulineColorPickerText>
            <SidebarInnerOutlineColorPickerDiv onClick={colorPalette} outline={OutlineColor} color={fillColor}></SidebarInnerOutlineColorPickerDiv>
        </SidebarInnerColorOutlinePickerContainer>
        </Fragment>
    )
}

else {
    return(
        <Fragment>
            <ColorPalette onClick={colorPalette}>
            <ColorPickedContainer>
                {colorSet1.map((color,index)=><ColorPicked key={index} color={color} onClick={()=>dispatch(OutlinecolorChanger(color))}/>)}
            </ColorPickedContainer>
            <ColorPickedContainer>
                {colorSet2.map((color,index)=><ColorPicked key={index} color={color} onClick={()=>dispatch(OutlinecolorChanger(color))}/>)}
            </ColorPickedContainer>
            <ColorPickedContainer><ColorPicked color={'grey'} onClick={()=>dispatch(OutlinecolorChanger('none'))}>None</ColorPicked></ColorPickedContainer>
            </ColorPalette>
        </Fragment>
    )
}
}