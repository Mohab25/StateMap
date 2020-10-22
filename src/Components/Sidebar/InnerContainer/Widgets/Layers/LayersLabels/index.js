import React,{Fragment} from 'react'
import {SidebarInnerLabelContainer,SidebarInnerLabelText, CheckToggler} from './styles/styles'

export default function index() {
    return (
        <Fragment>
            <SidebarInnerLabelContainer>
                <SidebarInnerLabelText>Label</SidebarInnerLabelText>
                <CheckToggler type='checkbox'></CheckToggler>
            </SidebarInnerLabelContainer>
        </Fragment>
    )
}
