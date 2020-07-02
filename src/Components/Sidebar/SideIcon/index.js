import React,{Fragment} from 'react'
import {SidebarIcon} from './styles/styles'
export default function index(props) {
    return (
        <Fragment>
            <SidebarIcon onClick={props.click}/>
        </Fragment>
    )
}
