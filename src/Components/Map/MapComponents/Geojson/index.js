import React,{Component,Fragment} from 'react'
// this is the actual data, it should be changed to read from postgres 
import json_data from '../../Selected_Areas.geojsonl.json'
// import Geojson object and popup from leaflet component, also think about using a modal
import {GeoJSON,Popup} from 'react-leaflet'
import {connect} from 'react-redux'
// this is an action to change geojson colors
import {colorChanger} from '../../../../Actions/ActionsCreators/LayerColorChangeForClassComponent'
import  rootReducer  from "../../../../Reducers";

class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            PolyFillColor:'grey', // by default the color is grey. 
            GeojsonKey:1,//?
            outline:'none', // this is the outline of the geojson object, changes according to stateprops from redux 
            view:'Map'    // the view changes dynamically. 
        };

        this.onEach= this.onEach.bind(this);
        this.styler = this.styler.bind(this);
        this.getColorScheme = this.getColorScheme.bind(this)
    }

    componentDidMount(){
        console.log('Geojson, Geojson_key:',this.state.GeojsonKey)
    }

    componentDidUpdate(prevProps){
        /**
         * prevProps holds {color: "", outline: "", view: "", onEach: ƒ, colorChanger: ƒ
         */
        if(this.props!=prevProps){
        let key = this.state.GeojsonKey;
        key++;     
        this.setState({PolyFillColor:this.props.color,outline:this.props.outline,GeojsonKey:key});
        this.setState({view:this.props.view});
    }
    }

    onEach(feature,layer){
        const popupContent = `<Popup><p>Block Name:${feature.properties.PAU_NAME}</p>
            <p>2008 Census:${parseInt(feature.properties.Census)}</p>
            <p>2020 Population:${parseInt(feature.properties.ES2)}</p>
        </Popup>`
        layer.bindPopup(popupContent)
    }

    getColorScheme(){
        switch(this.state.PolyFillColor){ // according to polyfill color a scheme will be returned 
            case 'red': return ['#FBE9E7','#FFCCBC','#FFAB91','#FF8A65','#FF7043','#FF5722','#F4511E','#E64A19','#D84315','#BF360C','red'];
            case 'green': return ['#E8F5E9','#C8E6C9','#A5D6A7','#81C784','#66BB6A','#4CAF50','#43A047','#388E3C','#2E7D32','#1B5E20','green'];
            case 'blue' : return ['#E1F5FE','#B3E5FC','#81D4FA','#4FC3F7','#29B6F6','#03A9F4','#039BE5','#0288D1','#0277BD','#01579B','blue'];
            default: return ['#E1F5FE','#B3E5FC','#81D4FA','#4FC3F7','#29B6F6','#03A9F4','#039BE5','#0288D1','#0277BD','#01579B','blue'];
            //default : return ['#ECEFF1','#CFD8DC','#B0BEC5','#90A4AE','#78909C','#607D8B','#546E7A','#455A64','#37474F','#263238'] 
        }
    }

    styler(feature){

        let colorPallete = this.getColorScheme(); // this is a list of colors 
        let pop = parseInt(feature.properties.ES2); // population estemation for 2020
        
        // according to population, a certain color will be returned 
        if(pop<=2000){return {color:this.state.outline,fillColor:colorPallete[0]}}
        else if(pop>=2000&&pop<=2500){return {color:this.state.outline,fillColor:colorPallete[1]}}
        else if(pop>=2500&&pop<=3000){return {color:this.state.outline,fillColor:colorPallete[2]}}
        else if(pop>=3000&&pop<=3500){return {color:this.state.outline,fillColor:colorPallete[3]}}
        else if(pop>=3500&&pop<=4000){return {color:this.state.outline,fillColor:colorPallete[4]}}
        else if(pop>=4000&&pop<=4500){return {color:this.state.outline,fillColor:colorPallete[5]}}
        else if(pop>=4500&&pop<=5000){return {color:this.state.outline,fillColor:colorPallete[6]}}
        else if(pop>=5000&&pop<=5500){return {color:this.state.outline,fillColor:colorPallete[7]}}
        else if(pop>=5500&&pop<=6000){return {color:this.state.outline,fillColor:colorPallete[8]}}
        else if(pop>=6000&&pop<=65000){return {color:this.state.outline,fillColor:colorPallete[9]}}
        
        else{return {color:this.state.outline,fillColor:colorPallete[10]}};
    
    }

    render(){
        let view  = this.state.view; 
        if(view=='Map'){
        return(
        <GeoJSON key={this.state.GeojsonKey} data={json_data} style={this.styler} onEachFeature={this.props.onEach}/>                    
        //<GeoJSON key={this.state.GeojsonKey} data={json_data} style={{color:this.state.outline,fillColor:this.state.PolyFillColor}} onEachFeature={this.onEach}/>                
        )}
        else{
            return(
                <Fragment></Fragment>
            )
        }
    }
} 

const mapStateToProps=(state)=>({
    color:state.LayerColors.fillColor,
    outline:state.LayerColors.OutlineColor,
    view:state.ToggleView.View

})

export default connect(mapStateToProps,{colorChanger})(Index); 