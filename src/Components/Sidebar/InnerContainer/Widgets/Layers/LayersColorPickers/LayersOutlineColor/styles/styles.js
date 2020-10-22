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