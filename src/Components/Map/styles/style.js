import styled from 'styled-components/macro';

export const MapContainer = styled.div`
    width:100%;     /* the map container  holds both the map and sidebar */ 
    height:100vh;
    padding:0px;      
    overflow:hidden;
    display:flex; 
`
export const LeafMapContainer = styled.div`
    flex-basis:75%;      /* this is the actual leaflet map*/ 
    height:100%; 
    padding:0px; 

    @media(max-width:1000px){
        flex-basis:100%; 
    }
`