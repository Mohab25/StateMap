import styled from 'styled-components'

export const SidebarIcon = styled.div`
    width:30px;
    height:35px;
    background:url(img/layers.png) no-repeat;
    position:absolute; 
    top:0px; 
    left:0px; 
    display:none; 
    cursor:pointer;
    @media(max-width:1000px){
        display:block;
        position:absolute;  
        top:75px;
        left:10px;
        z-index:13000;
    }
`