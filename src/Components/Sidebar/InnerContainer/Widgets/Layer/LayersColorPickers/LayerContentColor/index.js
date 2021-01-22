import React,{Fragment} from 'react'
import {SidebarInnerColorPickerContainer,SidebarInnerColorPickerText,SidebarInnerColorPickerDiv} 
from './styles/styles'
 
export default function index() {
    return (
        <Fragment>
            <SidebarInnerColorPickerContainer>
                <SidebarInnerColorPickerText>color</SidebarInnerColorPickerText>
                <SidebarInnerColorPickerDiv></SidebarInnerColorPickerDiv>
            </SidebarInnerColorPickerContainer>
        </Fragment>
    )
}
