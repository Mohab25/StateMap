import React,{Fragment} from 'react'
import {SidebarInnerColorOutlinePickerContainer,SidebarInnerOulineColorPickerText,
SidebarInnerOutlineColorPickerDiv} from './styles/styles'

export default function index() {
    return (
        <Fragment>
        <SidebarInnerColorOutlinePickerContainer>    
            <SidebarInnerOulineColorPickerText>Outline color</SidebarInnerOulineColorPickerText>
            <SidebarInnerOutlineColorPickerDiv></SidebarInnerOutlineColorPickerDiv>
        </SidebarInnerColorOutlinePickerContainer>
        </Fragment>
    )
}
