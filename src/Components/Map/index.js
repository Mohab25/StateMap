import React, { Component } from 'react'
import {Map,TileLayer,Marker,Popup,Circle} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {MapContainer,LeafMapContainer} from './styles/style'
import Sidebar from '../Sidebar/Sidebar/index'
import TogglersContainer from '../Togglers/TogglersContainer/index'
import GeoJSON_ from './MapComponents/Geojson'
import {connect} from 'react-redux'
import Tabular from '../DataView/Table/index'

class index extends Component {
    constructor(props){
            super(props);
            this.state={
                lat:15.570498544455713,
                long:32.532881032138349,
                zoom:15,
                view:'Map',
                tile:this.props.tile
            };

    }
    
    componentDidMount(){
        this.map = this.mapInstance.leafletElement;
    }

    componentDidUpdate(prevProps){
        if(prevProps!=this.props){
            console.log(prevProps)
            this.setState({view:this.props.view,
            tile:this.props.tile
            })
        }
        if(prevProps.FlyCoords!=this.props.FlyCoords){
            this.map.flyTo([this.props.FlyCoords[1],this.props.FlyCoords[0]],16)
        }
    }


    render() {
        L.Icon.Default.imagePath='img/'; 
        const position = [this.state.lat,this.state.long];  
        let view = this.state.view; 
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
                            <GeoJSON_/>
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
    FlyCoords:state.SearchReducer.Coords
})

export default connect(mapStateToProps)(index); 