import styled from 'styled-components'

export const SearchContainer=styled.div`
    width:200px; 
    height:500px;
    margin-right:150px; 
    background:transparent; 
    display:flex;
    flex-direction:column; 
    overflow:auto;

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
`

export const Matchcard = styled.div`
    width:100%;
    height:50px;  
    overflow:hidden;
    font-size:12px; 
    cursor:pointer; 
`