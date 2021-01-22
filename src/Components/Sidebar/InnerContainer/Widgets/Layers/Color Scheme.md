# Layer Component

## General Overview

The Layer Component gives the user the ability to control some visual effects about how layers are rendered (layer's color, layer's boundary and layer's labels), currently there are four main colors to render layers and six colors for layer's boundary with label component being controled by the tile's provider.
the Layer component is composed from the layer body holder \<LayerBodyHolder/> component, the \<ContentColorPicker/> component, the \<OutlineColorPicker/> component and the \<Label/> component, below figures represent how the user would interact with layer components.
!['Layer holder-1']() Layer holder component-1
!['Layer holder-2']() Layer holder component-2
!['change color scheme-1']() color picker component-1
!['change color scheme-2']() color picker component-2
!['change outline color 1']() outline color picker component-1
!['change outline color 2']() outline color picker component-2
!['change Label']() Label component

## Layer Holder Component\<LayerHolder/>

this is a functional component that wraps the layer component on the screen and handles how the user is going to interact with it(figures above).

### Component structure

The next JSX illustrates how the component is being structured.

~~~jsx
<>
    <LayerBodyHolder>
        <LayerNameHolder>
            <LayerName>Color Scheme</LayerName>
            <LayerToggleIcon></LayerToggleIcon>
        </LayerNameHolder>
        <ContentColorPicker/>
        <OutlineColorPicker/>
        <Label/>
    </LayerBodyHolder>
</>
~~~

1. \<LayerBodyHolder/>:
this is the parent wrapper for other components, it has a height which changes dynamically (grow and shrink) according to user interaction, below is the style JS as CSS for this component:

~~~JS
width:90%; 
height:${props=>props.height}px;  // the height is changed dynamically 
background-color:#2f2f2f; 
margin-left:-2%;
display:flex; 
flex-direction:column; 
justify-content:space-between; 
align-items:flex-start; 
align-content:space-evenly; 
overflow:hidden;
transition:1s; 
~~~

2. \<LayerNameHolder>:
this is a container for the section title and toggle icon("+" or "-"), this wrapper is where the click interaction is handled, below is js as css for this component:

~~~JS
width:100%; 
background-color:#1f1f1f; 
padding:10px; 
display:flex;  
flex-direction:row; 
justify-content:space-between; 
cursor:pointer; 
~~~

3. \<LayerName/>:
this is paragraph that represents the section name, below is the js as css to illustrate this item

~~~JS
color:white;
~~~

4. \<LayerToggleIcon/>:
these are the icons showed to represent the section interaction, two icons ("+" "-")are changed dynamically as the user clicks, below is the js as css to illustrate this component:

~~~JS
color:white; 
~~~

5. \<ContentColorPicker/>:
this is the second component that compose the layer component, it holds the functionality of changing the color of layers represented on the map.

6. \<OutlineColorPicker/>:
this is the third main component that compose the layer component, it holds the functionality of changing the outline color of each layer on the map.

7. \<Label/>:
this is the fourth component that compose the layer component, it's responsibility if to change the labels showed on the screen with the layers, a part of this functionality is handled via tiles and controled by tiles providers.

### Functions implemented

toggleHeightAndOverflow():
this the only function implemented by this component, it is responsible of changing the height and icons used with \<LayerBodyHolder/> and \<LayerToggleIcon>, it's uses ReactJS hook useState to achieve such functionality as below:

~~~JSX
let [bodyHeight,setHeight]=useState('50'); 
let [Icon,setIcon] = useState('icon-plus')
let toggleHeightAndOverflow=()=>{
    /**
     * set the height of the settings container and toggle plus-minus icon. 
     */
    if(bodyHeight==='380'){
        // if the height is 380, minimize it and toggle the icon className. 
        setHeight('50');
        setIcon('icon-plus')
    }
    else if(bodyHeight==='50'){
        // if the height is 50, maximize it and toggle the icon className. 
        setHeight('380')
        setIcon('icon-check-minus')
    }
}

~~~

The logic is to evaluate what is the current state of the height and which icon is implemented (height=50px by default, and icon='fa fa-plus' which is a plus icon), and as the user clicks both height and icons will be changed with new values (height=380px and icon='fa fa-minus' icon), note that the Awesome font library is downloaded with the application.

## \<ContentColorPicker/>

Content Color Picker component is responsible of changing the color of the layer(the body of layer excluding outlines), it utilizes redux to achieve such functionality as the color is store in redux store and used with \<GeoJSON/> that is a part of react-leaflet library.

### Component Type

functional component

### Usage and Functionalities

the main functionality of this component is to change the color of the layer (which is a \<GeoJSON/> object), as the user clicks on the color holder, a color palette appears with four colors for the user to pick, below images illustrates the interaction and mechanism.
!['Color Picker - user interaction-1']()
!['Color Picker - user interaction-2']()
!['Diagram-1 color palette']()
!['Diagram-2 color change for layer']()

### Functions implemented

1. changeRender: this function is responsible of showing or hiding the colors panel as the user clicks on the previously select color or if the user selects a new color(figure below).
!['Color panel toggle-1']()
!['Color panel toggle-2']()

#### *Parameters*

None

#### Function Implementation

JSX:

~~~JSX
let changeRender=()=>{
    if(Renderer===''){
    setRenderer('Color Palette');
    }
    else{
        setRenderer('')
    }
}
~~~

the function implements a very simple logic as it toggles the value of setRender to either be 'Color Palette' or empty value '', the next step takes place with the jsx returned from the the component which will evaluate the value of setRender first and accordingly either the palette or the holder will appear.

### Component Implementation

1. JSX

~~~ JSX
import React,{Fragment,useState} from 'react'
import {SidebarInnerColorPickerContainer,SidebarInnerColorPickerText,
    SidebarInnerColorPickerDiv,ColorPalette,ColorPickedContainer,ColorPicked} 
from './styles/styles'
import {useSelector,useDispatch} from 'react-redux' 
import {colorChanger} from '../../../../../../../Actions/ActionsCreators/LayerColorChange'


export default function Index() {
    const [Renderer,setRenderer] = useState(''); 
    //const [colorSet1,SetColors1] = useState(['white','black','grey']); 
    const [colorSet2,SetColors2] = useState(['green','blue','red']);
    const fillColor = useSelector(state=>state.LayerColors.fillColor); 
    const dispatch = useDispatch();

    let changeRender=()=>{
        if(Renderer===''){
        setRenderer('Color Palette');
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
                    <SidebarInnerColorPickerDiv color={fillColor} onClick={changeRender}></SidebarInnerColorPickerDiv>
                </SidebarInnerColorPickerContainer>
            </Fragment>
        )
    }
    else {
        return(
            <Fragment>
                <ColorPalette onClick={changeRender}>
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

~~~

2. JS as CSS

~~~JS
import styled from 'styled-components/macro'
export const SidebarInnerColorPickerContainer=styled.div`
    width:100%; 
    height:25%; 
    display:flex; 

`

export const SidebarInnerColorPickerText=styled.p`
    color:white;
    align-self:flex-start; 
    margin-left:20px; 
    position:relative; 
    top:10%; 
`

export const SidebarInnerColorPickerDiv=styled.div`
    width:37px; 
    height:37px; 
    background-color:${props=>props.color}; 
    align-self:flex-start; 
    margin-left:20px; 
    cursor:pointer; 
`

export const ColorPalette=styled.div`
    width:320px;
    height:250px;
    position:absolute; 
    top:0px; 
    left:0px; 
    background-color:#3f3f3f;
    display:flex; 
    flex-direction:column;    
`

export const ColorPickedContainer=styled.div`
    width:100%; 
    height:100px;
    display:flex; 
    flex-direction:row;
    justify-content:space-evenly;      
    align-items:center; 
`

export const ColorPicked = styled.div`
    width:60px;
    height:60px; 
    background-color:${props=>props.color}; 
    cursor:pointer; 
    color:white; 
`
~~~

## \<OutlineColorPicker/>

this component is responsible of changing the outline color of different layers, it utilizes redux as outline color is stored in redux store and used with the \<GeoJSON/> object that is part of react-leaflet library.

### Component Type

functional component

### Usage and Functionalities

the main functionality of this component is to change the color of the outline of each layer (which is a \<GeoJSON/> object), as the user clicks on the outline color holder, a color palette appears with six colors for the user to pick, below images illustrates the interaction and mechanism.
!['Color Picker - user interaction-1']()
!['Color Picker - user interaction-2']()
!['Diagram-1 color palette']()
!['Diagram-2 color change for layer']()

### Functions implemented

toggleColorPalette(): this function is responsible of showing or hiding the colors panel as the user clicks on the previously select outline color or if the user selects a new outline color(figure below).
!['Color panel toggle-1']()
!['Color panel toggle-2']()

#### *Parameters*

None

#### Function Implementation

JSX

~~~ jsx
let toggleColorPalette=()=>{
    if(Renderer===''){
    setRenderer('Color Palette');
    }
    else{
        setRenderer('')
    }
}
~~~

as the user clicks on the ouline color holder, the toggling of Rendered variable value happens between two values, 'ColorPalette' to show the panel for colors or '' which is an empty string to show the default component. 

### Component Implementation

1. JSX 

~~~ jsx 
import React,{Fragment,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux' 
import {SidebarInnerColorOutlinePickerContainer,SidebarInnerOulineColorPickerText,
SidebarInnerOutlineColorPickerDiv} from './styles/styles'
import {ColorPalette,ColorPickedContainer,ColorPicked} from '../LayerContentColor/styles/styles'
import {OutlinecolorChanger} from '../../../../../../../Actions/ActionsCreators/LayerOutlineColorChange'


export default function Index() {
    const [Renderer,setRenderer] = useState(''); 
    const [colorSet1,SetColors1] = useState(['white','black','grey']); 
    const [colorSet2,SetColors2] = useState(['green','blue','red']);
    const OutlineColor = useSelector(state=>state.LayerColors.OutlineColor);
    const fillColor =  useSelector(state=>state.LayerColors.fillColor);
    const dispatch = useDispatch();

    let toggleColorPalette=()=>{
        if(Renderer===''){
        setRenderer('Color Palette');
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
            <SidebarInnerOutlineColorPickerDiv onClick={toggleColorPalette} outline={OutlineColor} color={fillColor}></SidebarInnerOutlineColorPickerDiv>
        </SidebarInnerColorOutlinePickerContainer>
        </Fragment>
    )
}

else {
    return(
        <Fragment>
            <ColorPalette onClick={toggleColorPalette}>
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
~~~

2. JS as CSS

~~~ js
import styled from 'styled-components/macro'

export const SidebarInnerColorOutlinePickerContainer=styled.div`
    width:100%; 
    height:25%; 
    display:flex; 
`

export const SidebarInnerOulineColorPickerText=styled.p`
    color:white;
    align-self:flex-start; 
    margin-left:20px; 
    position:relative; 
    top:10%; 
`

export const SidebarInnerOutlineColorPickerDiv=styled.div`
width:37px; 
height:37px; 
background-color:white; 
align-self:flex-start; 
margin-left:20px; 
border:4px solid ${props=>props.outline}; 
`
~~~

## \<Label/>

Yet to be implemented.
