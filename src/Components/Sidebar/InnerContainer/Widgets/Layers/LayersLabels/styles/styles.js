import styled from 'styled-components/macro'

export const SidebarInnerLabelContainer=styled.div`
    width:100%; 
    height:25%; 
    display:flex; 
`

export const SidebarInnerLabelText = styled.p`
color:white;
align-self:flex-start; 
margin-left:20px; 
`

export const CheckToggler = styled.input`
    width:40px; 
    height:20px; 
    margin-left:15px; 
    background-color:#1f1f1f; 
    position:relative; 
    -webkit-appearance:none; 
    outline:none; 
    border-radius:20px; 
    transition:0.5s; 
    &:before{
        width:20px;              /* this is an element created as the first child*/ 
        height:20px;
        content:''; 
        position:absolute; 
        top:0px; 
        left:0px; 
        background-color:#fff; 
        border-radius:20px; 
        transition:0.5s;  
        cursor:pointer;   
    }
    &:checked{
        background-color:#000080; 
        &:before{
        left:20px;  /* moving the element 20px left */
    }
}

    
`