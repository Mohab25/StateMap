# DataToggler Component

## General Overview

Data Toggler component is responsible of changing the view to Data View (as opposed to map view - figure below), it implements Redux mechanism to achieve such effect.
!['Data View']()

## Component structure

 the following jsx illustrates the structure of the data toggler component,
~~~jsx

<>
    <LeafDataToggler onClick={()=>switchData(view)}>Data</LeafDataToggler>
</>
~~~

the structure is very simple, it just compose of one component \<LeafDataToggler/>

### \<LeafDataToggler/>

this is a clickable wrapper responsible of initiating the action which changes the view value in redux store to 'data' (see Functionality - Actions implementation - Reducer implementation below ).
the next js as css illustrates the structure of the \<LeafDataToggler/>

~~~js
import styled from 'styled-components'

export const LeafDataToggler= styled.div`
    margin-top:10px; 
    padding:5px 15px; 
    background-color:white; 
    z-index:10000;
    color:white;
    background-color:teal; 
    cursor:pointer
`
~~~

## Component Type

functional component

## Usage and Functionalities

DataToggler component is used primarily to switch the current view to data view (the other view is map view), view is stored on redux store and evaluated by the \<Map/> component. As the user clicks on data toggler button an action (toggleDataView - see Actions implemented below) is dispatched to change the current value of the view variable to 'data', Diagram below illustrates the functionality of the dat toggler.
!['Redux Diagram to change the view to data view']()

## Functions

### switchData()

 this function is responsible of changing the current value of the view variable stored in ToggleViewReducer reducer(see ToggleViewReducer below), via dispatching toggleDataView action with a view argument(see toggleDataView action below).

#### parameters

1. View (String): this is a string which value is either to be 'data' or 'map'.

## Component Implementation

JSX

~~~jsx
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

~~~

## Actions Implementation

### ToggleDataView - toggleDataView

Action Type:ToggleDataView
JSX

~~~jsx
export const ToggleDataView = 'ToggleDataView'; 
~~~

toggleDataView function  
JSX

~~~jsx
import {ToggleDataView} from '../../types';

export const toggleDataView=()=>{
    return {
        type:ToggleDataView,
        payload:'Data'
    }
}
~~~

the action has a type of ToggleDataView, as the user clicks on the \<LeafDataToggler/> the toggleDataView function is called and the action payload is altered to 'data', then the action is evaluated by the reducer (see ToggleViewReducer below)

## Reducers Implementation

### ToggleViewReducer

~~~jsx
import {ToggleMapView,ToggleDataView} from '../Actions/types'

const State = {View:'Map'};

export default function  ToggleViewReducer(state=State,action){
    switch(action.type){
        case ToggleMapView:return{
            ...state, 
            View:action.payload
        }
        case ToggleDataView:return{
            ...state,
            View:action.payload
        }
        default:return {...state}
    }
}
~~~

the reducer evaluates the action type to be one of two types(ToggleMapView,ToggleDataView) and updates the state View property accordingly to be equal to the action payload (see ToggleDataView above) then update the Browser's UI.
