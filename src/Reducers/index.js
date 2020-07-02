import {combineReducers} from 'redux';
import LayerColorsReducers from './LayerColorsReducer';
import ToggleView from "./TogglersReducer";
import TileReducer from './TileReducer'
import SearchReducer from './SearchReducer'

export default combineReducers({
    LayerColors: LayerColorsReducers,
    ToggleView:ToggleView,
    ChangeTile:TileReducer,
    SearchReducer:SearchReducer
})