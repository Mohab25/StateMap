# MapToggler Component

## General Overview

the map toggler component is responsible for the changing the view to the map view (as opposed to the data view - figure below), it implement redux mechanism to achieve such and effect(see Usage Functionality section).
!['map view']()

## Component structure

The following jsx illustrates the structure of the map toggler component.

~~~jsx
<>
    <LeafMapToggler>Map</LeafMapToggler>
</>
~~~

the structure of the map toggler component is simple and compose of one element \<LeafMapToggler/>

### \<LeafMapToggler/>

this is a clickable wrapper responsible of initiating the action which changes the view value in redux store to 'map'(see Functionality - Actions implementation - Reducer implementation below ).

#### \<LeafMapToggler/> structure

the following js as css illustrates how the wrapper is structured

~~~js
export const LeafMapToggler= styled.div`
    padding:5px 15px; 
    background-color:white; 
    z-index:10000;
    color:white;
    background-color:teal; 
    margin-right:10px; 
    cursor:pointer;
`
~~~

#### \<LeafMapToggler> functions

1. switchData(): switchData() function (implementation below) is handled with the component via onClick event handler which passes an event object to the function.

## Component Type

functional component

## Usage and Functionalities

MapToggler component is used primarily to switch the current view to map view (the other view is data view), view is stored on redux store and evaluated by the \<Map/> component. As the user clicks on map toggler button an action (toggleMapView - see Actions implemented below) is dispatched to change the current value of the view variable to 'map', Diagram below illustrates the functionality of the map toggler.
!['Redux Diagram to change the view to map view']()

## Functions

### switchData()

 this function is responsible of changing the current value of the view variable stored in ToggleViewReducer reducer(see ToggleViewReducer below), via dispatching toggleMapView action with a view argument(see toggleMapView action below).

#### parameters

1. View (String): this is a string which value is either to be 'map' or 'data'.

#### Function Implementation

JS

~~~js
let switchData=(view)=>{
    // change redux state. 
    dispatch(toggleMapView())
}
~~~

## Component Implementation

JSX

~~~jsx
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

~~~

## Actions Implementation

### ToggleMapView - toggleMapView

Action type:ToggleMapView

~~~jsx
export const ToggleMapView = 'ToggleMapView'; 
~~~

toggleMapView function

~~~jsx
import {ToggleMapView} from '../../types';

export const toggleMapView=()=>{
    return {
        type:ToggleMapView,
        payload:'Map'
    }
}
~~~

the action has a type of ToggleMapView, as the user clicks on the \<LeafMapToggler/> the toggleMapView function is called and the action payload is altered to 'map', then the action is evaluated by the reducer (see ToggleViewReducer below)

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

the reducer evaluates the action type to be one of two types(ToggleMapView,ToggleDataView) and updates the state View property accordingly to be equal to the action payload (see ToggleMapView above) then update the Browser's UI.
