import styled from 'styled-components'

export const SearchContainer=styled.div`
    width:200px; 
    background:transparent; 
    display:flex;
    flex-direction:column; 
    @media(min-width:200px){
        position:relative;
        top:88px; 
        left:42px;
    }

`

export const LeafSearchBar = styled.input`
    width:200px;
    height:30px;
    background:transparent; 
    outline:none; 
    border:1px solid teal;
    color:white; 
    ::placeholder{
        color:white;
    } 
    @media(min-width:200px){
        width:100px; 
    }
`

export const Matchcard = styled.div`
    width:100%;
    height:50px;  
    position:relative;
    right:78px; 
    top:8px; 
    overflow:hidden;
    font-size:12px; 
    cursor:pointer; 
`