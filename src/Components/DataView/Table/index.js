import React,{Fragment} from "react";
import Data from "../../Map/Selected_Areas.geojsonl.json";

export default function index(){
    const tabular = <table style={{width:'100%'}}className='table table-striped'>
        <thead className='thead-dark'>
            <tr>
                <th>Locality Name</th>
                <th>Block Name</th>
                <th>Census 2008 </th>
                <th>Census Estimation 2018</th>
                <th>Census Estimation 2020</th>
            </tr>
        </thead>
        <tbody>
            {Data.features.map(block=>
            <tr>
                <td style={{fontFamily:'Cairo'}}>{block.properties.AU_NAME}</td>
                <td style={{fontFamily:'Cairo'}}>{block.properties.PAU_NAME}</td>
                <td style={{textAlign:'center',fontFamily:'Open Sans',fontSize:'19px'}}>{block.properties.Census_2008}</td>
                <td style={{textAlign:'center',fontFamily:'Open Sans',fontSize:'19px'}}>{parseInt(block.properties.ES_2018)}</td>
                <td style={{textAlign:'center',fontFamily:'Open Sans',fontSize:'19px'}}>{parseInt(block.properties.ES_2020)}</td>
            </tr>)}
        </tbody>
    </table>
    
    
    return(
        <div className='' style={{marginTop:'100px'}}>
                {tabular}
        </div>
    )
}