import styled from 'styled-components/macro'

export const LayerBodyHolder = styled.div`
    width:90%; 
    height:${props=>props.height}px; 
    background-color:#2f2f2f; 
    margin-left:-2%;
    display:flex; 
    flex-direction:column; 
    justify-content:space-between; 
    align-items:flex-start; 
    align-content:space-evenly; 
    overflow:hidden;
    transition:1s; 
`

export const LayerNameHolder = styled.div`
    width:100%; 
    background-color:#1f1f1f; 
    padding:10px; 
    display:flex;  
    flex-direction:row; 
    justify-content:space-between; 
    cursor:pointer; 
`

export const LayerName = styled.p`
    color:white;
`

export const LayerToggleIcon =styled.p`     
    color:white;
`