# Tiles Components

## General Overview

The Tiles component is responsible for changing the different tiles (which serves as base maps) within the map component, it gives the user the ability to switch between three tiles( see tiles figures below).
There are two main components compose the tiles component, the tiles body holder \<TilesBodyHolder> which compose of set of containers that determines how tiles pickers are going to be shown on the screen, and Tiles Picker \<TilesPicker> component which holds tiles preview images and perform the functionality to change the tiles.

![]()

## Tiles Body Holder \<TilesBodyHolder/>

this is a functional component that is composed of a sets of containers that wrap over tiles pickers, it controls how tiles pickers are shown on the screen and the intended way for the user to interact with them (figure below for illustration).

### Component structure

The next JSX illustrates how the component is being structured.

~~~jsx
<>
    <TilesBodyHolder>
        <TilesNameHolder>
            <TilesName>Tiles</TilesName>
            <TilesToggleIcon><i></i></TilesToggleIcon>
        </TilesNameHolder>
        <TilePicker/>
    </TilesBodyHolder>
    
</>
~~~

1. \<TilesBodyHolder/>:
    this is the parent warper, it's takes 90% of it's parent (sidebar) width and has a height which is set dynamically (grow or shrink according to wether the user is set to change the tiles or not), below is the (style sheet as javascript) which illustrates how this component is going to be rendered:

~~~js
    width:90%; 
    height:${props=>props.height}px; /* this to change the height dynamically */
    display:flex; 
    flex-direction:column; 
    justify-content:flex-start ; 
    align-items:flex-start; 
    align-content:space-evenly; 
    margin-left:-2%;
    background-color:#2f2f2f; 
    overflow:hidden; 
    transition:1s; 
~~~

2. \<TileNameHolder/>:
    a wrapper for both the name of the section and the icons ("+" and "-" icons which changes dynamically as the user clicks),below is the (style sheet as javascript) which illustrates how this component is going to be rendered:

~~~js
    width:100%; 
    display:flex;  
    justify-content:space-between; 
    padding:10px; 
    background-color:#1f1f1f; 
    cursor:pointer; 
~~~

3. \<TilesName/>:
    this is a paragraph to indicate the section name "Tiles" as opposed to other sections which reflects dynamic change also (as ColorSchemes and layers),below is the (style sheet as javascript) which illustrates how this component is going to be rendered:

~~~js
    color:white;
~~~

4. \<TilesToggleIcon/>:
    these are the icons which are changed as the user clicks the \<TilesNameHolder/>, there are two icons, "+" to show a panel the holds tiles pickers and "-" to shrink the Tiles body holder to it's original state,below is the (style sheet as javascript) which illustrates how this component is going to be rendered:

~~~js
    color:white;
~~~

5.\<TilePicker>:
    this is an independent component which holds the preview of tiles and perform the actual functionality of changing the tiles.

### Functions implemented

toggleHeightAndIcon: this the only function implemented by this component, it is responsible of changing the height and icons used with \<TilesBodyHolder/> and \<TilesToggleIcon>, it's uses React hooks useState to achieve such functionality as below:

~~~jsx
    let [bodyHeight,setHeight]=useState('50'); 
    let [Icon,setIcon] = useState('icon-plus')
    let toggleHeightAndIcon=()=>{
        if(bodyHeight==='380'){
            setHeight('50');
            setIcon('icon-plus')
        }
        else if(bodyHeight==='50'){
            setHeight('380')
            setIcon('icon-check-minus')
        }
    }
~~~

The main logic is to evaluate what is the current state of the height and which icon is implemented (height=50px by default, and icon='fa fa-plus' which is a plus icon), and as the user clicks both height and icons will be changed with new values (height=380px and icon='fa fa-minus' icon), note that the Awesome font library is downloaded with the application.

## \<TilePicker/>

