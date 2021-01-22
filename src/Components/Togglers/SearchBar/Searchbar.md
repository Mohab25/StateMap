# SearchBar Component

## General Overview

Search bar component is responsible of searching for different Public Adminstration Units, for triggering a map movement to the selected unit(automatic pan and zoom), and for limiting the search results on DataView. Search bar also provide an autocomplete to suggest names for the units, figure below illustrate the functionality of the search bar.
!['Search bar functionality - mapView']()
!['Search bar functionality - DataView']()
!['Search bar functionality - Diagram']()
!['Search bar functionality - functions']()


## Component structure

The following jsx illustrates the component structure.

~~~jsx
<>
    <SearchContainer>
    <LeafSearchBar ref={textInput} onChange={handleChange} placeholder='Search(ِArabic)...' placeholderTextColor='green'></LeafSearchBar>
    <Matchcard/>
    </SearchContainer>
</>
~~~

the Search bar component composes of \<SearchContainer/>, \<LeafSearchBar/>, \<Matchcard/> components.

### \<SearchContainer/>

This is a wrapper for other components.

#### \<SearchContainer/> structure

the following js as css illustrates the structure of this component.

~~~js
export const SearchContainer=styled.div`
    width:200px; 
    background:transparent; 
    display:flex;
    flex-direction:column; 
    @media(min-width:200px){
        position:relative;
        top:88px; 
        left:42px;
    }

`
~~~

as above, the component has 200px width and fit-content height with no background and with flex display, it's position relative the screen with the above values.

#### \<SearchContainer/> functions

None

### \<LeafSearchBar/>

This component is the actual search input that appears on the screen, and handle the searching functionality.

#### \<LeafSearchBar/> structure

The following js as css illustrates the structure of the component

~~~js

export const LeafSearchBar = styled.input`
    width:200px;
    height:30px;
    background:transparent; 
    outline:none; 
    border:1px solid teal;
    color:white; 
    ::placeholder{
        color:white;
    } 
    @media(min-width:200px){
        width:100px; 
    }
`
~~~

#### \<LeafSearchBar/> functions

The component implements the following functions

1. handleChange: handleChange function (see Functions below) is called by this component via onChange event handler which passes an event object to the function.

2. ClearSeachBar: ClearSeachBar method (see Functions below) is called via Reactjs Reference using useRef hook, it gets the current value of the search bar.

#### <\LeafSearchBar/> Special Attributes

a reference (Reactjs Refs) is used with this component via useRef hook, this ref allows for the direct interaction with the component and it's utilized with ClearSeachBar() method.

### \<Matchcard/>

This component serves as a container that holds the search matching results, as the user starts typing on the search bar, values of autocompletion are showing on a small card below the bar.

#### \<Matchcard/> structure

the following js as css illustrates the structure of the match card component:

~~~js
export const Matchcard = styled.div`
    width:100%;
    height:50px;  
    position:relative;
    right:78px; 
    top:8px; 
    overflow:hidden;
    font-size:12px; 
    cursor:pointer; 
`
~~~

#### \<Matchcard/> functions

1. searchItem: this is redux function related to search SearchItemClicked action (see Action implementation below), it is triggered while the view is a map view and changes the redux store with a search term.

2. searchTableItem: this is a redux function related to SearchTableItem action (see action implementation below), it is triggered while the view is a data view and changes the redux store with the search term.

## Component Type

Functional component.

## Usage and Functionalities

The Search bar component implement these functionalities:

1. Search for Public adminstration units by name: the search bar conduct a search functionality that queries the database for public admin units by name, it implements a simple get request to fetch the data from the backend.

2. Autocompletion: the search bar assist the user with Autocompletion for search terms that indicates to public admin units names, it implements a simple js script for such functionality.

3. Map Movement to search area: after the user input the search term, the search bar implements redux mechanism to trigger a map pan and zoom functionality to the selected Public admin unit.

4. Table filtering: if the view is the data view, the search bar triggers actions that limits the data viewed on the table of the data view.  

see General Overview section for illustrations figures.

## Functions

### handleChange

The handleChange method is triggered every time the user changes the search bar by adding or removing an input, the function filters the data coming from the database for terms that begin with what the user has entered, then the values that are returned from the filtering process are passed to another function to performs autocompletion.

#### handleChange parameters

1. Event object (e): the event onChange passes this object to the function and gives access to the search bar properties every time the user changes the search values.

#### handleChange Implementation

JS

~~~js
const handleChange=(e)=>{
        let BlockList = Data.features; 
        // the actual filtering 
        let matches = BlockList.filter(block=>{
            let regex = new RegExp(`^${e.target.value}`,'gi')
            return block.properties.PAU_NAME.match(regex)
        })
        if (e.target.value===''){
            matches=[]
        }
        showSearchResult(matches)
    }
~~~

(Data) is the the data coming from the database, PAU_NAME represents the public admin unit name, showSearchResult it another function implement by the Searchbar component (see below).

### showSearchResult

ShowSearchResult function is called from handleChange method(see above),first it sets a state of the search bar component "cardmatches" which is is a list of items mapped for constructing the matchCard item that holds the values from filtering process conducted by handleChange method, showSearchResult then dispatches one of two action (depending on the current view), searchItem action which is related to the map view or searchTableItem action which is related to the data view (see Action Implementation below), the final functionality is to call ClearSeachBar method (see below) that clears the search bar after the user search for a specific term and move the map to the area represented by the term (see ClearSeachBar function below).

#### showSearchResult parameters

1. matches (Array/Object): this is a list of terms illustrate the public admin units names, it either to be an empty list or filtered list from previous process conducted by other function.

#### showSearchResult implementation

the following jsx illustrates the implementation of the function

~~~js
let showSearchResult=(matches)=>{
        setMatches(matches)
    }
    let view = useSelector(state=>state.ToggleView.View)
    let dispatch = useDispatch()
    let card = cardmatches.map(match=>
    <div onClick={()=>{
        if(view==='Map'){dispatch(searchItem(match));ClearSeachBar()}
        else dispatch(searchTableItem(match.properties.PAU_NAME))
    }
    }>
    <Matchcard className='card card-body mb-1'>
        <h6 className='text-primary' style={{fontFamily:'Cairo'}}>{match.properties.PAU_NAME}</h6>
    </Matchcard>
    </div>
        )
~~~

the view is got from redux store, and the cardmatches is got from the component state, PAU_NAME is a property with the data that reflects the public admin unit name, ClearSeachBar method is illustrated below.

### ClearSeachBar

this function is called from one endpoint (showSearchResult function - see above), it's main purpose is to clear the search bar after the user clicks on a certain public admin unit and the map moved to that unit, it alters the matchCard state variable and sets it's value to an empty list.

#### ClearSearchBar parameters

None

#### ClearSearchBar implementation

the following jsx illustrates the implementation of the clear search bar function.

~~~jsx
const ClearSeachBar=()=>{
    textInput.current.value='';
    let matches =[]; 
    showSearchResult(matches)
}
~~~

textInput is reference to the search bar input item, (for showSearchResult details see above).

## Component Implementation

JSX

~~~jsx
import React,{useState} from 'react'
import {SearchContainer,LeafSearchBar,Matchcard} from './styles/styles'
import Data from '../../../Components/Map/Selected_Areas.geojsonl.json'
import {searchItem} from "../../../Actions/ActionsCreators/Selection/SearchClick";
import {searchTableItem} from "../../../Actions/ActionsCreators/Selection/searchTableItem";
import {useSelector,useDispatch} from 'react-redux'
import {useRef} from 'react'

export default function Index() {
    let [cardmatches,setMatches] = useState([]); 
    let textInput = useRef(null);

    const ClearSeachBar=()=>{
        textInput.current.value='';
        let matches =[]; 
        showSearchResult(matches)
    }
    const handleChange=(e)=>{
        let BlockList = Data.features; 
        // the actual filtering 
        let matches = BlockList.filter(block=>{
            let regex = new RegExp(`^${e.target.value}`,'gi')
            return block.properties.PAU_NAME.match(regex)
        })
        if (e.target.value===''){
            matches=[]
        }
        showSearchResult(matches)
    }

    let showSearchResult=(matches)=>{
        setMatches(matches)
    }
    let view = useSelector(state=>state.ToggleView.View)
    let dispatch = useDispatch()
    let card = cardmatches.map(match=>
    <div onClick={()=>{
        if(view==='Map'){dispatch(searchItem(match));ClearSeachBar()}
        else dispatch(searchTableItem(match.properties.PAU_NAME))
    }
    }>
        <Matchcard className='card card-body mb-1'>
            <h6 className='text-primary' style={{fontFamily:'Cairo'}}>{match.properties.PAU_NAME}</h6>
        </Matchcard>
    </div>
        )
    return (

        <>
            <SearchContainer>
            <LeafSearchBar ref={textInput} onChange={handleChange} placeholder='Search(ِArabic)...' placeholderTextColor='green'></LeafSearchBar>
            {card}
            </SearchContainer>
        </>
    )
}

~~~

Note that Data here is imported for testing purposes only, in production a fetch request is used to get the data.

## Actions Implementation

### SearchItemClicked - searchItem

JSX

~~~jsx
import {SearchItemClicked} from '../../types';

export const searchItem=(matchedItem)=>{
    return {
        type:SearchItemClicked,
        payload:matchedItem
    }
}
~~~

the action type is SearchItemClicked and it takes a payload of the parameter passed to the searchItem function which is called whenever the input changes, then the payload (an object) of the action is evaluated by the SearchReducer reducer (see Reducers Implementation below) and the state is changed according the matched items.

### SearchTableItem - searchTableItem

JSX

~~~jsx
import {SearchTableItem} from '../../types';

export const searchTableItem=(Name)=>{
    return {
        type:SearchTableItem,
        payload:Name
    }
}

~~~

this function is called if the view is Data view, it has an action type of SearchTableItem and the payload changes every time the user changes the input, the payload then get evaluated by the SearchReducer (see reducers implementation below) reducer and updates the state accordingly.  

## Reducers Implementation

### SearchReducer

JSX

~~~jsx
import {SearchItemClicked} from '../Actions/types'
import {SearchTableItem} from '../Actions/types'

const State = {MatchedItem:[],Name:''};

export default function SearchItemReducer(state=State,action){
    switch(action.type){
        case SearchItemClicked:return{
            ...state,
        MatchedItem:action.payload
        }
        case SearchTableItem:return{...state,Name:action.payload};

        default:return(state)
    }
}
~~~

the SearchReducer import two actions with types (SearchItemClicked,SearchTableItem), when the payload of SearchItemClicked changes, the reducer sets the MatchedItem state property with the new payload (object), then the reducer is called within the Map component and the map move to the new matched item. if the type of action which payload is changed is SearchTableItem (the user is working on the data view), then the reducer changes the Name property of the state which is used in the data view, the end result is to filter the data view table.
