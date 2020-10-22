import React,{Fragment,useState,useEffect} from 'react'
import {SidebarInnerColorPickerContainer,SidebarInnerColorPickerText,
    SidebarInnerColorPickerDiv,ColorPalette,ColorPickedContainer,ColorPicked} 
from './styles/styles'
import {useSelector,useDispatch} from 'react-redux' 
import {FillColorChange} from '../../../../../../../Actions/types.js'
import {colorChanger} from '../../../../../../../Actions/ActionsCreators/LayerColorChange'


export default function Index() {
    const [Renderer,setRenderer] = useState(''); 
    //const [colorSet1,SetColors1] = useState(['white','black','grey']); 
    const [colorSet2,SetColors2] = useState(['green','blue','red']);
    const fillColor = useSelector(state=>state.LayerColors.fillColor); 
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
                <SidebarInnerColorPickerContainer>
                    <SidebarInnerColorPickerText>color</SidebarInnerColorPickerText>
                    <SidebarInnerColorPickerDiv color={fillColor} onClick={colorPalette}></SidebarInnerColorPickerDiv>
                </SidebarInnerColorPickerContainer>
            </Fragment>
        )
    }
    else {
        return(
            <Fragment>
                <ColorPalette onClick={colorPalette}>
                {/*<ColorPickedContainer>
                    {colorSet1.map((color,index)=><ColorPicked key={index} color={color} onClick={()=>dispatch(colorChanger(color))}/>)}
                </ColorPickedContainer>*/}
                    <ColorPickedContainer>
                        {colorSet2.map((color,index)=><ColorPicked key={index} color={color} onClick={()=>dispatch(colorChanger(color))}/>)}
                    </ColorPickedContainer>
                </ColorPalette>
            </Fragment>
        )
    }
}
