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
