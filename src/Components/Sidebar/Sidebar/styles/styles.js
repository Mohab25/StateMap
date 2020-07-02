import styled from 'styled-components';

export const Sidebar = styled.div`
    width:25%; 
    min-height:100%;
    float:left; 
    background-color:#3f3f3f; 
    display:flex; 
    flex-direction:column; 
    justify-content:space-between;
    align-items:center; 
    align-content:space-around;
    top:0px; 
    bottom:0px; 
    left:0px; 
    transition:1.5s ;
    transition-timing-function: ease-out;

    @media (max-width:1000px){
        overflow:hidden; 
        width:50%; 
        position:absolute; 
        left:${props=>props.Sideposition}px;
        z-index:12000; 
    }

`

export const SidebarTitle = styled.h6`
    margin-top:20px; 
    color:white; 

`

export const SidebarSubtitle = styled.p`
    color:white; 
    align-self:flex-start; 
    margin-top:100px; 
    margin-left:20px; 
    
`

export const SidebarSubtitleHr = styled.hr`
    border-top:1px solid white;  
    width:100%; 
`

export const SidebarSettings = styled.div`
    width:80%;
    background-color:teal; 
    color:white; 
    padding:10px;
    text-align:center; 
`