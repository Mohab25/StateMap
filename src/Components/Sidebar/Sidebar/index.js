import React,{useState,useEffect,Fragment} from 'react'
import {Sidebar,SidebarTitle,SidebarSubtitle,SidebarInnerContainer,SidebarSettings} from './styles/styles'
import InnerDiv from '../InnerContainer/index'
import SidebarIcon from '../SideIcon/index'

export default function Index() {
    let [SidebarPosition,SetSidebarPosition] = useState('-500');

    const toggelSidebar=()=>{
            if (SidebarPosition === '-500'){
                console.log("Sidebar Position:",SidebarPosition)
                SetSidebarPosition('0')
            }
            else if(SidebarPosition==='0'){
                console.log("Sidebar Position:",SidebarPosition)
                SetSidebarPosition('-500')
            }

        }

        useEffect(()=>{
            
        }); 

    return (
        <Fragment>
            <Sidebar Sideposition={SidebarPosition}>
            <SidebarTitle>Mohab Jam</SidebarTitle>
            <SidebarSubtitle>Layer Settings</SidebarSubtitle>
            <InnerDiv></InnerDiv>
            <SidebarSettings>Settings</SidebarSettings>
            </Sidebar>
            <SidebarIcon click={toggelSidebar}/>
        </Fragment>
    )
}
