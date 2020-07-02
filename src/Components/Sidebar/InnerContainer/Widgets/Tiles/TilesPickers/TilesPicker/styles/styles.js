import styled from 'styled-components'
export const SidebarTilesPickerContainer=styled.div`
    width:100%; 
    height:300px; 
    overflow-y:scroll
`

export const SidebarTilesPickerText=styled.p`
    color:white;
    align-self:flex-start; 
    margin-left:20px; 
`

export const SidebarTilesPickerDiv=styled.div`
    width:85%; 
    height:150px;
    margin:auto;  
    background:url(${props=>props.background}); 
    align-self:flex-start; 
    cursor:pointer; 
`