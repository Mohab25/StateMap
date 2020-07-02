import styled from 'styled-components';

export const MapContainer = styled.div`
    width:100%; 
    height:100vh;
    padding:0px;   
    background-color:green;   
    overflow:hidden;
`
export const LeafMapContainer = styled.div`
    width:75%; 
    height:100%; 
    float:left; 
    background-color:yellow; 
    padding:0px; 

    @media(max-width:1000px){
        width:100%; 
    }
`