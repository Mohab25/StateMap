# Map Component

## General Overview

Map Component is where the most functionality of other components achieved, it's responsible of showing the leaflet map with a tile, pan and navigation, Geojson objects to show layers on top of the map, It applies different functionalities from simple zooming to flying to a specific part of the map and showing the result of more complicated calculations as Dijkstra for routing.
the following figures are illustrative figures of the map component.
!['Leaflet map component-1']()

### Usage and Functionalities

1. Map Rendering: MapView is rendered through this component by default and if the user interacted with \<MapView/> component.

2. Data View Rendering: Dataview is rendered conditionally if the user interacted with \<DataView/> component.

3. Map elements Rendering: there are several elements rendered through this component as:
    3.1 Sidebar: the sidebar (which holds the layers' pickers, Tiles' pickers, computations )is rendered through the map component.
    3.2 Togglers: DataView toggler, MapViewToggler, Searchbar is render through map component.
    3.3 GeoJSON: GeoJSON objects are rendered as layers on top of the map component.

4. Map elements functionalities application: the map component is where functions of other components takes place as:
    4.1 Tiles change: as documented in Tiles component \<TilePicker/> applies changeTiles function which targets the tile of the Map component.
    4.2  layer's changeRender: as documented in Layers component, \<ContentColorPicker/> applies changeRender function which target the Geojson object resides on the map component.
    4.3 layer's OutlinecolorChanger: as documented in the layer's component \<OutlineColorPicker/> applies an outlineColorChanger action which targets the GeoJSON resides on the map component.
    4.4 toggleMapView: as documented in MapToggler component, maptoggler applies toggleMapView action which targets the map component.
    4.5 Search bar handleChange: as documented in SearchBar component, search bar applies a handleChange function which targets the map component.

5. Routing via Dijkstra: the map component send the fetch request for the backend which is necessary to compute routing functionalities such dijkstra algorithm for find shortest path to the nearest healthcare facility.

## Component structure

the following jsx illustrates the structure of the component.

~~~jsx
<MapContainer>
    <Sidebar></Sidebar>
    <LeafMapContainer>
        <Map center={position} zoom={this.state.zoom} style={{width:'100%',height:'100%'}} ref={this.mapInstance} onclick={this.handleClick}>
            <TileLayer url={this.state.tile}/>
            {Blocks}
            {shortest_line}
        </Map>
    </LeafMapContainer>
    <TogglersContainer/>
</MapContainer>
~~~

it's composed of these components \<MapContainer/>,\<Sidebar/>,\<LeafMapContainer/>,\<Map/>,\<TogglersContainer/>

### \<MapContainer/>

It serves as a container for both the map and controllers (lays within the sidebar as Layer's controllers and calculations controllers), the main functionality is to adjust the rendering of it's children components on the screen.

#### \<MapContainer> structure

the following js as css illustrates the style of the component

~~~js
export const MapContainer = styled.div`
    width:100%;     /* the map container  holds both the map and sidebar */ 
    height:100vh;
    padding:0px;      
    overflow:hidden;
    display:flex; 
~~~

#### \<MapContainer/> functions

as the main functionality is to wrap it's children, no functions applied for the component.

### \<Sidebar/>

The sidebar is a composite component that holds other components which performs different functionalities on the map (as layers controllers which controls the layers' appearance on the map), for detail see \<Sidebar/> doc.

### \<LeafMapContainer/>

This is a container specific to leaflet map, it controls how the map is rendering on the screen and kept separated from the sidebar see figure below.
!['Leaflet map container']()

#### \<LeafMapContainer/> structure

the following js as css illustrates the structure of the container which reflects how it's rendered on the screen.

~~~js
export const LeafMapContainer = styled.div`
    flex-basis:75%;      /* this is the actual leaflet map*/ 
    height:100%; 
    padding:0px; 

    @media(max-width:1000px){
        flex-basis:100%; 
    }
`
~~~

#### \<LeafMapContainer/> functions

no functions applied for this container.

### \<Map/>

This is the leaflet map which is a part of teh library, it handles different functionalities and receive different properties.

#### \<Map/> structure

The structure of this component is applied by leaflet library, the only styles that should be applied to the map is to have a width and a height.

#### \<Map/> properties

1. center (Array): this is the coordinate (in [lat,lng] structure) which determines where on earth the map will be rendering, leaflet receives WGS-84 projected coordinates which will be transformed internally.

2. zoom (Integer): this is an integer which determines the zoom level of the first render of the map.

3. style (HTML): the only required styling for the map is the width and the height.

#### \<Map> additional properties

In order for React-leaflet library to gain the full functionalities of leaflet library additional property is applied:

1. ref: this is React Ref created via React.createRef() to gain access to leaflet map and apply functions that are not accessed with react-leaflet library.

#### \<Map/> functions

As the different functions applied to the map component comes from other components (As GeoJSON, sidebar layers' controllers as color picker), it map be odd but the map component itself has only one function:
handleClick: this function is called via a click event and receives an event object which grant access to the map component properties (see function implementation below).

### \<TogglersContainer/>

The togglers container is a composite component which holds other components (as MapView, DataView, Searchbar), these components performs different functions on the map, see \<TogglersContainer>,\<MapView/>,\<DataView/>,\<Searchbar/>

## Component Type

Class Component

## Component State

The following state property values are used:
    lat:15.570498544455713,
    long:32.532881032138349,
    zoom:15,
    view:'Map',
    tile:this.props.tile,
    shortest_line:{},
    shortest_line_json_key:2,

### lat,long (Int)

These state property values are used as default values for map center property.

### zoom (Integer)

This value is used as a default for the initial zoom level.

### tile (String)

This is a string that is used as a default value for the tile.

### shortest_line (Object)

This is an object that holds properties (including geometry) of the incoming data from hte server after dijkstra computation has taken place.

### shortest_line_json_key (Integer)

As leaflet geojson objects must have a key in order for them to render, this is the key for the incoming shortest line object.

## Component Properties

### center

This property is required by leaflet for each map, it's an array of two coordinates for default centering of the map.

### zoom

This property is required by leaflet as the default zoom level.

### style

The style property is required by leaflet in order to show the map correctly, the two required styles are the width and the height. Other styles can be set as well.

### ref

Ref property is a react reference that get access to the leaflet map for different functionalities, the current functionality that uses this reference is the flying effect which takes place as the user clicks on a search autocomplete suggestion (see componentDidUpdate lifecycle method for implementation).

### Properties coming from redux

#### view (String)

This string is either to be 'Map' or 'Data', it's evaluated to toggle between the mapView and DataView.

#### tile property (String)

This property is used with the tile component coming form react-leaflet library as a url to the tile provider which is used to render the base map. 

#### MatchedItem (Object)

MathcedItem is an object holds the values of the currently selected location by the user, it is used to achieve flying effect to pan the location selected.

#### getMapCoords (Object)

This is an object that holds the coordinates of the closest health care when dijkstra is applied from where the user clicked the map.

#### jsonSwitcher (String)

jsonSwitcher is a string that is evaluated when the user is about the implement routing functions, according to it's value, the GeoJSON objects currently shown on the screen would be removed to use the routing functionality.

## Component Lifecycle

### render

JSX

~~~jsx
render() {
        L.Icon.Default.imagePath='img/'; 
        const position = [this.state.lat,this.state.long];   // initial position 
        let view = this.state.view;  // map or data view 
        if(view=='Map'){
            // setting up the blocks and shortest line 
            let Blocks=<Fragment></Fragment>
            let shortest_line=<Fragment></Fragment>
            // filling up Blocks with geometry
            if(this.props.jsonSwitcher!='off'){
                Blocks= <GeoJSON_/> 
            }
            // filling up shortest line with geometry 
            else if(Object.keys(this.state.shortest_line).length!=0){
                shortest_line= <GeoJSON data={this.state.shortest_line} key={this.state.shortest_line_json_key}/>
            }   
        return (
            <div>
                <MapContainer> {/*Map container holds both map and sidebar*/}
                    <Sidebar></Sidebar>
                    <LeafMapContainer> {/* this is the actual map */}
                        <Map center={position} zoom={this.state.zoom} style={{width:'100%',height:'100%'}} ref={this.mapInstance} onclick={this.handleClick}>
                            <TileLayer url={this.state.tile}/>
                            {Blocks}
                            {shortest_line}
                        </Map>
                    </LeafMapContainer>
                    <TogglersContainer/>
                </MapContainer>
            </div>
        )
    }
        else{ // tablular data 
            return(
                <div style={{height:'100vh'}}>
                    <TogglersContainer/>
                    <Tabular></Tabular>
                </div>
            )
        }
    }
~~~

Render method is called before other lifecycle methods, as the component renders for the first time four variables are created (position, view, blocks, shortest_line), the position is created using state property values of lat,lng and used later with the map for centering(in return), the view is got from the state and by default it has a value of 'Map', the value of the view then get evaluated and if it equals to 'Map', then Blocks and shortest_line variables are created and given empty fragments values, another evaluation takes place for jsonSwitcher property (coming from redux), if the jsonSwitcher value equals to 'off' then Blocks value updated and equals to \<GeoJSON/> which is an imported component, another evaluation for the the value of key length of shortest_line object is conducted and if the key length is larger than 0, shortest_line variable is given a value of \<GeoJSON data={this.state.shortest_line} key={this.state.shortest_line_json_key}/>.
for the same evaluation of the view if it equals to 'Map', the render method returns a MapView with the above elements, otherwise it returns DataView.  

### ComponentDidMount

JSX

~~~jsx
componentDidMount(){
    this.map = this.mapInstance.leafletElement; 
}
~~~

ComponentDidMount is called after the first render of the component, the implementation is simple, map reference is created using the React reference previously created with the constructor and points to the leaflet map object, thus grant access to the leaflet map properties and functions.

### ComponentDidUpdate

JSX

~~~jsx
componentDidUpdate(prevProps){
    if(prevProps!=this.props){
        this.setState({view:this.props.view,
        tile:this.props.tile,
        })
    }
    if(prevProps.MatchedItem!=this.props.MatchedItem){
        let [Fly1,Fly2] = this.props.MatchedItem.geometry.coordinates[0][0][0];
        if(this.state.view=='Map'){this.map.flyTo([Fly2,Fly1],15);
        }
    }
}

~~~

ComponentDidUpdate is called when the state or properties of the component is changed after the first render and after the component mounted, the implementation checks for properties changes, if there is a change of properties the function sets the state with new view and tile, and if a change about the redux property happened related to search bar item clicked, the function applies a fly effect to the location of the item.

## Functions

### handleClick

handleChange function is called as the user clicks on the map, the coordinates of the location of the click is taken and a fetch request is sent to the backend to complete the necessary calculation for nearest health care facility.

#### handleClick parameters

event object (e): the onClick event object is passed as a parameter to the function and grant access to the map properties.

#### handleChange implementation

The following jsx illustrates the implementation of the function

~~~jsx
handleClick(e){
    // this is a props coming from redux 
    this.props.changeCoords(e.latlng)
    this.setState({clicklatlng:e.latlng})
    let key = this.state.shortest_line_json_key;
    key++; 
    // making a post request 
    fetch('http://197.252.18.152:8000/state/closest_healthcare/',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.props.getMapCoords.coords)
    }).then(res=>res.json()).then(data=>{this.setState({shortest_line:data,shortest_line_json_key:key})})
    
}
~~~

the key is required to show the geojson object on the map and the intended object is the shortest path which is a lineString object, the main body of the function is to send a request to the backend that holds the current coordinates which the user clicked, and receives and object which holds the geometry of the line represents the shortest path.

## Actions Implementation

### ClosestFacilityComputer - changeCoords

JS

~~~js
import {ClosestFacilityComputer} from '../../types'

export const changeCoords=(coordsOb)=>dispatch=>{
    dispatch(
        {
        type:ClosestFacilityComputer,
        payload:coordsOb
    }   )
    
}
~~~

as the user clicks anywhere on the map, this function is called and action type used  "ClosestFacilityComputer" will have a payload of the coordinates where the user clicked, the payload will be evaluated by the ClosestFacilityReducer reducer (see reducer implementation below) and new state will be stored.

## Reducers Implementation

### ClosestFacilityReducer

JS

~~~js
import {ClosestFacilityComputer} from '../Actions/types'
import {ClosestFacilityComputerRemoveJson} from '../Actions/types'

let State={
    coords:{},   
    switcher:'off',
} 

export default function ClosestFacilityReducer(state=State,action){
    switch(action.type){
        case ClosestFacilityComputer:return{
            ...state,
            coords:{...state.coords,coords:action.payload}
        }
        case ClosestFacilityComputerRemoveJson:return{
            ...state,
            switcher:action.payload
        }

        default:return{state}
    }
}

~~~

as the user clicks on the map the payload of two actions ClosestFacilityComputer,ClosestFacilityComputerRemoveJson will be changed and the reducer will set a new state, the coordinates of the location will be stored and used by the map component to complete the fetch request and sent to the server to make the dijkstra computations, with the other action is used to remove the previous geometry which represents the other shortest path.
