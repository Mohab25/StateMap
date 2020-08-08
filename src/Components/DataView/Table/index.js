import React,{Fragment} from "react";
import Data from "../../Map/Selected_Areas.geojsonl.json";
import {useSelector} from 'react-redux'


export default function Index(){
    const Features = Data.features;
    let match=[]; 
    let name=useSelector(state=>state.SearchReducer.Name);
    if(name!=''){
        match=Features.filter(match=>match.properties.PAU_NAME===name)
    } 
    else{
        match = Features; 
    }
    const tabular = <table style={{width:'100%',position:'relative',top:'38px'}}className='table table-striped'>    
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
            {match.map(block=>   
            <tr>
                <td style={{fontFamily:'Cairo'}}>{block.properties.AU_NAME}</td>
                <td style={{fontFamily:'Cairo'}}>{block.properties.PAU_NAME}</td>
                <td style={{textAlign:'center',fontFamily:'Open Sans',fontSize:'19px'}}>{isNaN(parseInt(block.properties.Census))?'No Data':parseInt(block.properties.Census)}</td>
                <td style={{textAlign:'center',fontFamily:'Open Sans',fontSize:'19px'}}>{isNaN(parseInt(block.properties.ES1))?'No Data':parseInt(block.properties.ES1)}</td>
                <td style={{textAlign:'center',fontFamily:'Open Sans',fontSize:'19px'}}>{isNaN(parseInt(block.properties.ES2))?'No Data':parseInt(block.properties.ES2)}</td>
            </tr>)}
        </tbody>
    </table>
    
    return(
        <div className='' style={{marginTop:'100px'}}>
                {tabular}
        </div>
    )
}