import React, { Component, Fragment } from 'react'
// import leaflet-react component 
import {Map,TileLayer,Marker,Popup,Circle,GeoJSON,Layer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
// import from styled components
import {MapContainer,LeafMapContainer} from './styles/style'
// import sidebar 
import Sidebar from '../Sidebar/Sidebar/index'
// import togglers, Map/Data/Search 
import TogglersContainer from '../Togglers/TogglersContainer/index'
// import Geojson which holds the actual Public adminstration units 
import GeoJSON_ from './MapComponents/Geojson'
// import conntect for redux states
import {connect} from 'react-redux'
// import data view 
import Tabular from '../DataView/Table/index'
// import latlng action to handle clicking maps latlng. 
import {changeCoords} from "../../Actions/ActionsCreators/ColsestFacilityComputer/changeCoords";


class index extends Component {
    constructor(props){
            super(props);
            this.state={
                // set the initial location and zoom level 
                lat:15.570498544455713,
                long:32.532881032138349,
                zoom:15,
                view:'Map',
                // set the tile,it comes from redux(mapStateToProps), and changes as the user clicks
                tile:this.props.tile,
                // getting a response from the server 
                shortest_line:{},
                shortest_line_json_key:2, 
            }
            this.mapInstance = React.createRef()
            this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.map = this.mapInstance.current.leafletElement; 
    }


    componentDidUpdate(prevProps){
        if(prevProps!=this.props){
           //console.log('Map object:previous props',prevProps)
            this.setState({view:this.props.view,
            tile:this.props.tile,
            })
        }
        if(prevProps.MatchedItem!=this.props.MatchedItem){
            let [Fly1,Fly2] = this.props.MatchedItem.geometry.coordinates[0][0][0];
            // check if the view is a map view or data view. 
            if(this.state.view=='Map'){this.map.flyTo([Fly2,Fly1],15);
            }
        }
    }

    handleClick(e){
        // this is a props coming from redux 
        this.props.changeCoords(e.latlng)
        let key = this.state.shortest_line_json_key;
        key++; 
        // making a post request 
        fetch('http://localhost:8000/state/closest_healthcare/',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.props.getMapCoords.coords)
        }).then(res=>res.json()).then(data=>{this.setState({shortest_line:data,shortest_line_json_key:key})})
        
        // on subsequent clicks, the original state shortest line should change 
    
    }
    render() {
        L.Icon.Default.imagePath='img/'; 
        const position = [this.state.lat,this.state.long];   // initial position 
        let view = this.state.view;  // map or data view 
        if(view=='Map'){
            // setting up the blocks and shortest line 
            let Blocks=<></>
            let shortest_line=<></>
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
}

const mapStateToProps=(state)=>({
    view:state.ToggleView.View,  // the view either to be map or tabular
    tile:state.ChangeTile.Tile,  // the tile changes dynamically as the user clicks  
    MatchedItem:state.SearchReducer.MatchedItem,  // this is the item to be passed to geojson.
    getMapCoords:state.ClosestFacilityReducer.coords,     // this is the coords.  
    jsonSwitcher:state.ClosetHealthCareRemoveJson.switcher, // switch json off and on to let a room for the user to click. 

})


export default connect(mapStateToProps,{changeCoords})(index); 