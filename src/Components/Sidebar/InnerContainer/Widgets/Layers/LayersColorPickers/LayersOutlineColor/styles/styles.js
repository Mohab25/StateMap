import styled from 'styled-components'

export const SidebarInnerColorOutlinePickerContainer=styled.div`
    width:100%; 
    height:25%; 

`

export const SidebarInnerOulineColorPickerText=styled.p`
    color:white;
    align-self:flex-start; 
    margin-left:20px; 
`

export const SidebarInnerOutlineColorPickerDiv=styled.div`
width:50px; 
height:30px; 
background-color:${props=>props.color}; 
align-self:flex-start; 
margin-left:20px; 
border:4px solid ${props=>props.outline}; 
`
