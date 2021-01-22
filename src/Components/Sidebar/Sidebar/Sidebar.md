# Sidebar Component

## General Overview

The sidebar is a responsive holder for different components that interact with the map in different ways, it grows and shrink horizontally according to the screen width, the sidebar is separated to different section as each describes a set of components that interact with the map in similar manner, figure below illustrates the sidebar positions.
!['sidebar position-large screens']()
!['sidebar position-small screens']()

## Component structure

The following jsx illustrates the structure of the Sidebar component.

~~~jsx
<>
    <Sidebar Sideposition>
    <SidebarTitle>Sidebar</SidebarTitle>
    <SectionTitle>Layer Settings</SectionTitle>
    <InnerDiv></InnerDiv>
    <SectionTitle>Computations</SectionTitle>
    <SidebarOperation className='btn btn-warning'>Closet Healthcare </SidebarOperation>
    </Sidebar>
    <SidebarIcon/>
</>
~~~

the sidebar component is composed of these wrappers(\<Sidebar/>,\<SidebarTitle/>,\<SectionTitle/>,\<InnerDiv/>,\<SidebarOperation/>,\<SidebarIcon/>)

### \<Sidebar/>

this is the main wrapper of the sidebar, it takes 25% of the screen size and the full height of the screen, as the screen gets smaller than 1000px, the sidebar drops and a icon is shown instead, as the user clicks on the icon the sidebar reappears to take 25% of the screen size with the ability to toggle it.

#### implementation

the following implementation illustrates the sidebar styling which is responsible for the toggling behavior.
JS as CSS:

~~~ js
export const Sidebar = styled.div`
    flex-basis:25%; 
    height:100%;
    background-color:#3f3f3f; 
    display:flex; 
    flex-direction:column; 
    align-items:center; 
    justify-content:flex-start; 
    top:0px; 
    left:0px; 
    transition:1.5s ;
    transition-timing-function: ease-out;

    @media (max-width:1000px){
        overflow:hidden; 
        width:30%; 
        position:absolute; 
        left:${props=>props.Sideposition}px;  /*this is for toggling*/ 
        z-index:1001;
    }

`
~~~

the Sideposition is the property responsible of toggling the sidebar in different screen sizes, according to it the position of the sidebar will either increase to the point the component becomes off the screen, and vise versa.

### \<SidebarTitle/>

this is a wrapper for the title of the sidebar, it is featured by a simple \<h6> tag.

#### implementation

JS as CSS

~~~js
export const SidebarTitle = styled.h6`
    margin-top:20px; 
    color:white; 

`
~~~

### \<SectionTitle/>

this is a wrapper for each section title, it is featured by a simple \<p> tag.

#### implementation

JS as CSS

~~~js
export const SectionTitle = styled.p`
    width:100%;     
    color:white; 
    padding-left:20px;
    padding-bottom:20px; 
    align-self:flex-start; 
    border-bottom:1px solid white; 
`
~~~

### \<InnerDiv/>

this the container for layers that is shown on the sidebar, it holds other components as Layer's Tiles pickers and layer's Colors pickers.

### \<SidebarOperation/>

this is a clickable element (featured by a button) to fire a certain operation, currently there only operation used is calculate closest health care facility.

#### implementation

JS as CSS

~~~js
export const SidebarOperation = styled.div`
    margin-top:5px; 
    width:80%;
    color:white; 
    padding:10px;
    text-align:center; 
`
~~~

### \<SidebarIcon/>

this is an icon that control the appearance of the sidebar on small screens.

#### implementation

JS as CSS

~~~js
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
~~~

## Component Type

functional component

## Usage and Functionalities

The sidebar component is a holder for other components that perform different operations on the map (as changing layers appearance, performing measurements on the map, finding paths ..etc.), the only dynamic functionality applied is toggling it's appearance on different screen sizes.

## Functions

1. toggleSidebar: this is the function responsible of changing the sidebar position on hte screen, as the screen sizes get smaller than 1000px, the side position changed and the wrappers disappear from the screen leaving only the icon, as the user clicks on the icon the sidebar reappears on the screen (see figures above).

### Parameters

NONE

### Function Implementation

JSX

~~~jsx
const toggleSidebar=()=>{
        if (SidebarPosition === '-500'){
            SetSidebarPosition('0')
        }
        else if(SidebarPosition==='0'){
            SetSidebarPosition('-500')
        }

    }
~~~

the sidebar position is calculated in pixels, it determines the left margin of the sidebar component, as the screen size get smaller or the user clicks the sidebar icon, the value of the sidebar position changes.

### Component Implementation

JSX

~~~jsx
import React,{useState,useEffect} from 'react'
import {Sidebar,SidebarTitle,SectionTitle,SidebarOperation} from './styles/styles'
import InnerDiv from '../InnerContainer/index'
import SidebarIcon from '../SideIcon/index'
import { useSelector,useDispatch } from 'react-redux';

export default function Index() {
    let [SidebarPosition,SetSidebarPosition] = useState('-500');

    const toggleSidebar=()=>{
            if (SidebarPosition === '-500'){
                SetSidebarPosition('0')
            }
            else if(SidebarPosition==='0'){
                SetSidebarPosition('-500')
            }

        }

    return (
        <>
            <Sidebar Sideposition={SidebarPosition}>
            <SidebarTitle>Mohab Jam</SidebarTitle>
            <SectionTitle>Layer Settings</SectionTitle>
            <InnerDiv></InnerDiv>
            <SectionTitle>Computations</SectionTitle>
            <SidebarOperation className='btn btn-warning' onClick={compute}>Closet Healthcare </SidebarOperation>
            </Sidebar>
            <SidebarIcon click={toggleSidebar}/>
        </>
    )
}

~~~
