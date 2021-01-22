# TogglersContainer Component

## General Overview

The TogglerContainer component is the main holder for other toggler components (MapToggler, DataToggler, Searchbar), thus it's functionality is limited to hold these components without making changes to either map or data views.

## Component structure

The following jsx illustrates the component structure.

~~~jsx
<>
    <LeafTogglersContainer>
        <MapDataHolder>
        <MapToggler/>
        <DataToggler/>
        </MapDataHolder>
        <SearBar/>
    </LeafTogglersContainer>
</>
~~~

it compose of \<LeafTogglersContainer/>, \<MapDataHolder/>, the other components are imported to the container.

### \<LeafTogglersContainer/>

This component serves as a wrapper for other components. 

#### \<LeafTogglersContainer/> structure

the following js as css illustrates the structure of this wrapper. 

~~~js
export const LeafTogglersContainer= styled.div`
    padding:5px 15px; 
    position:fixed; 
    top:30px; 
    right:60px; 
    z-index:10000;
    display:flex; 
    flex-direction:row; 
    justify-content:flex-start; 
    align-items:center; 

    @media (min-width: 200px) {
        width:100px;
        right:15px; 
        flex-direction: column;
        justify-content:flex-end;
        align-items:center; 
        margin-top:-20px; 
      }
    
`
~~~

### \<MapDataHolder/>

This a holder for both map and data togglers, it separates these components from Searchbar component for styling purposes.

#### \<MapDataHolder/> structure

the following js as css illustrates the structure of this wrapper.

~~~js
export const MapDataHolder = styled.div`
    position:absolute; 
    top:5px; 
    right:0px; 
    display:flex; 
    flex-direction:row; 
    margin-left:50px; 

    @media (min-width: 200px) {
        flex-direction: column;
        justify-content:flex-end;
        align-items:start; 
      }
`
~~~

## Component Type

Functional component. 

## Usage and Functionalities

the main functionality of this component is to serve as a wrapper for other togglers and ease the stye by which they appears in the screen for both views (map and data).  

## Functions

None

## Component Implementation

JSX

~~~jsx
import React from 'react'
import {LeafTogglersContainer,MapDataHolder} from './styles/styles'
import DataToggler from '../DataToggler'
import MapToggler from '../MapToggler'
import SearchBar from '../SearchBar' 
export default function index() {
    return (
        <>
            <LeafTogglersContainer>
                <MapDataHolder>
                <MapToggler/>
                <DataToggler/>
                </MapDataHolder>
                <SearchBar/>
            </LeafTogglersContainer>
        </>
    )
}

~~~

## Actions Implementation

None

## Reducers Implementation

None
