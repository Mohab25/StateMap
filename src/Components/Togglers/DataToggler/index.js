import React from 'react'
import {LeafDataToggler} from './styles/styles'
import {useSelector,useDispatch} from 'react-redux' 
import {toggleDataView} from '../../../Actions/ActionsCreators/ToggleActions/ToggleDataView'

export default function Index() {

    let view = useSelector(state=>state.ToggleView.View); 
    let dispatch = useDispatch(); 

    let switchData=(view)=>{
        // change redux state. 
        dispatch(toggleDataView())
        console.log(view)
    }

    return (
        <>
            <LeafDataToggler onClick={()=>switchData(view)}>Data</LeafDataToggler>
        </>
    )
}
