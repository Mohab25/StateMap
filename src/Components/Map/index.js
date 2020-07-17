import React, { Component } from 'react'
import {Map,TileLayer,Marker,Popup,Circle,GeoJSON,Layer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {MapContainer,LeafMapContainer} from './styles/style'
import Sidebar from '../Sidebar/Sidebar/index'
import TogglersContainer from '../Togglers/TogglersContainer/index'
import GeoJSON_ from './MapComponents/Geojson'
import {connect} from 'react-redux'
import Tabular from '../DataView/Table/index'
import Data from './Selected_Areas.geojsonl.json'

class index extends Component {
    constructor(props){
            super(props);
            this.state={
                lat:15.570498544455713,
                long:32.532881032138349,
                zoom:15,
                view:'Map',
                tile:this.props.tile,
                Flying_match:{}
            }
            this.GeojsononEach = this.GeojsononEach.bind(this);
            this.matched = this.matched.bind(this)
    }

    componentDidMount(){
        this.map = this.mapInstance.leafletElement;
    }
 
    matched(MatchedItem=''){
        this.setState({Flying_match:MatchedItem},()=>{this.GeojsononEach()})
        
    }
    GeojsononEach(feature,layer){
        let matched = this.state.Flying_match
        let popupContent='';
        console.log('flying match:',matched)
        if(Object.keys(matched).length==0){
        popupContent = `<Popup><p>Block Name:${feature.properties.PAU_NAME}</p>
        <p>2008 Census:${parseInt(feature.properties.Census)}</p>
        <p>2020 Population:${parseInt(feature.properties.ES2)}</p>
        </Popup>`
        layer.bindPopup(popupContent)
        }
        // this is a trial to solve geojson popup problem
        else{ /*
            const free={
                type: "FeatureCollection",
                "name": "All_Selected_Areas",
                "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                "features": [matched]
            }
        
            this.setState({freeBus:free})
        */}

    }
    componentDidUpdate(prevProps){
        if(prevProps!=this.props){
            console.log(prevProps)
            this.setState({view:this.props.view,
            tile:this.props.tile
            })
        }
        if(prevProps.MatchedItem!=this.props.MatchedItem){
            let [Fly1,Fly2] = this.props.MatchedItem.geometry.coordinates[0][0][0];
            console.log(Fly1,Fly2)
            if(this.state.view=='Map'){this.map.flyTo([Fly2,Fly1],15);
            this.matched(this.props.MatchedItem)  
            }
            }
    }


    render() {
        L.Icon.Default.imagePath='img/'; 
        const position = [this.state.lat,this.state.long];  
        let view = this.state.view; 
        console.log('free bus',this.state.freeBus)
        if(view=='Map'){
        return (
            <div>
                <MapContainer>
                    <Sidebar></Sidebar>
                    <LeafMapContainer>
                        <Map center={position} zoom={this.state.zoom} style={{width:'100%',height:'100%'}} ref={e => { this.mapInstance = e }}>
                            <TileLayer url={this.state.tile}/>
                            {/*<Marker position={position} draggable={true}>
                                <Popup>Mohab Jam</Popup>
                            </Marker>
                            <Circle center = {position} radius={200}/>*/}
                            <GeoJSON_ onEach={this.GeojsononEach}/> 

                        </Map>
                    </LeafMapContainer>
                    <TogglersContainer/>
                </MapContainer>
            </div>
        )
        }
        else{
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
    view:state.ToggleView.View,
    tile:state.ChangeTile.Tile,
    MatchedItem:state.SearchReducer.MatchedItem
})

const ExtendedMarker = props => {

    const openPopup = marker => {
      if (marker) marker.leafletElement.openPopup();
    };
  
    return (
      <GeoJSON ref={el => openPopup(el)} {...props}/>
    );
  };


export default connect(mapStateToProps)(index); 