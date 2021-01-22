# Geojson Component

## General Overview

Geojson component is a part of react-leaflet library and it's where the data is loaded before being shown over the map, it reflects the concept of layers as it holds the three types of vector data (points, linesStrings and polygons), GeoJSON object also style all the data which shows on top of the map and is responsible of applying other functionality over the data (as add popups data each element that shows when the user clicks).

### Usage and Functionalities

1. Load the data: GeoJSON object loads the data that eventually rendered over the map tile.

2. control data rendering: GeoJSON Object is responsible for controlling the style of the data.  

3. Applying function over the data before it loads: geoJSON object has onEach property which loops over each element of the data and apply a certain function to the element.

## Component structure

the following jsx illustrates the structure of the GeoJSON component.

~~~jsx
<GeoJSON key={this.state.GeojsonKey} data={this.state.json_ob} style={this.styler} onEachFeature={this.onEach}/>                    
~~~

the structure is simple and composed of one element that is a part of react-leaflet library.

## Component Type

Class Component.

## Component State

The state of GeoJSON component the following property value components:
    PolyFillColor:'grey',
    GeojsonKey:1,
    outline:'none',
    view:'Map',
    json_ob:{}

### PolyFillColor (String)

This is a string that control the color of the GeoJSON object features, by default it reflects a grey scheme (see getColorScheme function implementation below).

### GeojsonKey (Integer)

In order for elements to be rendered as GeoJSON object, the object must have a key.

### outline (String)

Outline property value controls the outline of the geojson body object (the border of the object), by default GeoJSON features don't have an outline.

### view (String)

View controls the current view to be shown on the screen (either the map or data view), the default is map view.

### json_ob (Object)

The json_ob is the actual data that either to be imported from a file or loaded from a sever.

## Component Properties

### key

In order for the GeoJSON object to be rendered it must has the property equals to an integer.

### data

data property points to the actual data to be rendered.

### style

style property takes a function that holds styes to applied for all GeoJSON features.

### onEachFeature

onEachFeature property points to a function that is applied to all features of the GeoJSON object before it is rendered on the map.

### Redux Properties

#### color

This property changes the color of all the feature of the GeoJSON object, it changes as the user clicks on the content color palette of the side.

#### outline

This property changes the outline of the all features of the GeoJSON object, it changes as the user clicks on the outline color palette of the side.

#### view

This property changes the current view (map or data view), switching between views is conducted by the view togglers.

## Component Lifecycle

### render

the following jsx illustrates the render method of the GeoJSON component.

~~~jsx
render(){
    let view  = this.state.view; 
    if(view=='Map'){
    if(Object.keys(this.state.json_ob).length!=0){
    return(
    <GeoJSON key={this.state.GeojsonKey} data={this.state.json_ob} style={this.styler} onEachFeature={this.onEach}/>                    
    //<GeoJSON key={this.state.GeojsonKey} data={json_data} style={{color:this.state.outline,fillColor:this.state.PolyFillColor}} onEachFeature={this.onEach}/>                
    )} else{return(<></>)}
}
    else{return(<></>)}
}
~~~

The render method is the first to called before other lifecycle methods, before rendering view variable is created and evaluated based on view value stored in the state, if the view is a map the geojson object is returned with several properties and functions.

### ComponentDidMount

ComponentDidMount is called after the render method when the component loads for the first time, the following jsx illustrates ComponentDitMount method

~~~jsx
    componentDidMount(){
        this.setState({json_ob:data})
    }
~~~

after the component mounts, json_ob property value of the state is changed according the data imported (also fetch request can be used here), as the state changes the component would be re-rendered again.

### ComponentDidUpdate

ComponentDidUpdate is called if the properties of the component is changed than their previous values, the following jsx illustrates the componentDidUpdate.

~~~jsx
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
~~~

the method evaluates the current properties of the component with the previous one, if they didn't match, the method sets the state according to new properties.

## Functions

### onEach

this method is called as the component renders on the screen, it applies a certain functionality on each feature of the GeoJSON object, the current functionality is to set popup data over each feature so that as the user clicks on the feature data must be illustrated.

#### onEach parameters

onEach methods takes two parameter, feature parameter which represents the feature to be rendered on the screen, layer parameter which handle adding each feature to the geojson object.

#### onEach implementation

js

~~~js
onEach(feature,layer){
    const popupContent =
        `<Popup><p>Block Name:${feature.properties.PAU_NAME}</p>
        <p>2008 Census:${parseInt(feature.properties.Census)}</p>
        <p>2020 Population:${parseInt(feature.properties.ES2)}</p>
        </Popup>`

    layer.bindPopup(popupContent)
}
~~~

The function construct popContent variable from the data and append it to the layer.

### getColorScheme

## Component Implementation

## Actions Implementation

## Reducers Implementation
