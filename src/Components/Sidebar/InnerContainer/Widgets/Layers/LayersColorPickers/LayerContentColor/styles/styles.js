import styled from 'styled-components'
export const SidebarInnerColorPickerContainer=styled.div`
    width:100%; 
    height:25%; 
 
`

export const SidebarInnerColorPickerText=styled.p`
    color:white;
    align-self:flex-start; 
    margin-left:20px; 
`

export const SidebarInnerColorPickerDiv=styled.div`
    width:50px; 
    height:30px; 
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