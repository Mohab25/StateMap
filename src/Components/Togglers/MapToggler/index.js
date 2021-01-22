import React from 'react'
import {LeafMapToggler} from './styles/styles'
import {useSelector,useDispatch} from 'react-redux' 
import {toggleMapView} from '../../../Actions/ActionsCreators/ToggleActions/ToggleMapView'


export default function Index() {
    
    let view = useSelector(state=>state.ToggleView.View); 
    let dispatch = useDispatch(); 

    let switchData=(view)=>{
        // change redux state. 
        dispatch(toggleMapView())
    }

    return (
        <>
            <LeafMapToggler onClick={()=>switchData(view)}>Map</LeafMapToggler>
        </>
    )
}
