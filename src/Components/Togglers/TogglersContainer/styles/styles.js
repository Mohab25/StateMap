import styled from 'styled-components'

export const LeafTogglersContainer= styled.div`
    padding:5px 15px; 
    position:fixed; 
    top:30px; 
    right:60px; 
    z-index:10000;
    display:flex; 
    flex-direction:row; 
    justify-content:flex-start; 
    align-items:center; 

    @media (min-width: 200px) {
        width:100px;
        right:15px; 
        flex-direction: column;
        justify-content:flex-end;
        align-items:center; 
        margin-top:-20px; 
      }
    
`

export const MapDataHolder = styled.div`
    position:absolute; 
    top:5px; 
    right:0px; 
    display:flex; 
    flex-direction:row; 
    margin-left:50px; 

    @media (min-width: 200px) {
        flex-direction: column;
        justify-content:flex-end;
        align-items:start; 
      }
`