import React,{Fragment} from 'react'
import {innerContainer} from './styles/styles'
import LayerBody from './Widgets/Layers/LayersBodyHolder/index'
import Tiles from './Widgets/Tiles/TilesBodyHolder/index'
import Schemes from './Widgets/Color_Schemes/LayersBodyHolder/index'


export default function index() {
    return (
        <Fragment>
                <LayerBody/>
                <Tiles/>
                {/*<Schemes/>*/}
        </Fragment>
    )
}
