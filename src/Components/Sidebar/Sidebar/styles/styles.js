import styled from 'styled-components/macro';

export const Sidebar = styled.div`
    flex-basis:25%; 
    height:100%;
    background-color:#3f3f3f; 
    display:flex; 
    flex-direction:column; 
    align-items:center; 
    justify-content:flex-start; 
    top:0px; 
    left:0px; 
    transition:1.5s ;
    transition-timing-function: ease-out;

    @media (max-width:1000px){
        overflow:hidden; 
        width:30%; 
        position:absolute; 
        left:${props=>props.Sideposition}px;  /*this is for toggling*/ 
        z-index:1001; /* the z-index of zoom signs is 1000 */
    }

`

export const SidebarTitle = styled.h6`
    margin-top:20px; 
    color:white; 

`

export const SectionTitle = styled.p`
    width:100%;     
    color:white; 
    padding-left:20px;
    padding-bottom:20px; 
    align-self:flex-start; 
    border-bottom:1px solid white; 
`

export const SidebarOperation = styled.div`
    margin-top:5px; 
    width:80%;
    color:white; 
    padding:10px;
    text-align:center; 
`