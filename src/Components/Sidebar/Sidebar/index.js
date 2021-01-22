import React,{useState,useEffect} from 'react'
import {Sidebar,SidebarTitle,SectionTitle,SidebarOperation} from './styles/styles'
import InnerDiv from '../InnerContainer/index'
import SidebarIcon from '../SideIcon/index'
import { useSelector,useDispatch } from 'react-redux';
import {removeJson} from '../../../Actions/ActionsCreators/ColsestFacilityComputer/RemoveJson'


// look, you have to change the color and button text according latlng array length 


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

        let jsonState = useSelector(state=>state.ClosetHealthCareRemoveJson)
        let dispatch = useDispatch()
        const compute=(e)=>{
        /* here i need a state, according to it the geojson should be removed and 
         the text and color of the button should change. 
        after the user clicks on the map and re-click button, the state sould reflect 
        this, and the compute functionality should change so it brings data from the 
        database. 
        if the user re-click on the map, it should remove the lastest state and 
        add a new one reflecting the coords. 
        . 

         */
        let jsonstate = jsonState; 
        if(jsonstate.switcher==='off'){ // this controls the geojson switching 
            dispatch(removeJson('on'))
        }
        else{
            dispatch(removeJson('off'))
        }

    }

        useEffect(()=>{
            dispatch(removeJson('on'))   // when the component mounts for the first time uses let the geojson appears 
        },[]); 

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
