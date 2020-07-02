import React,{Fragment} from 'react'
import {LeafMapToggler} from './styles/styles'
import {useSelector,useDispatch} from 'react-redux' 
import {toggleMapView} from '../../../Actions/ActionsCreators/ToggleActions/ToggleMapView'


export default function Index() {
    
    let view = useSelector(state=>state.ToggleView.View); 
    let dispatch = useDispatch(); 

    let switchData=(view)=>{
        // change redux state. 
        dispatch(toggleMapView())
        console.log(view)
    }

    return (
        <Fragment>
            <LeafMapToggler onClick={()=>switchData(view)}>Map</LeafMapToggler>
        </Fragment>
    )
}
