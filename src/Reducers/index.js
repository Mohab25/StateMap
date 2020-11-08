import {combineReducers} from 'redux';
import LayerColorsReducers from './LayerColorsReducer';
import ToggleView from "./TogglersReducer";
import TileReducer from './TileReducer'
import SearchReducer from './SearchReducer'
import ClosestFacilityReducer from "./ClosestHealthCare";
import RemoveJson from './ClosestHealthCare'

export default combineReducers({
    LayerColors: LayerColorsReducers,
    ToggleView:ToggleView,
    ChangeTile:TileReducer,
    SearchReducer:SearchReducer,
    ClosestFacilityReducer,
    ClosetHealthCareRemoveJson:RemoveJson,
})
