import React,{Fragment} from "react";
import {useState,useEffect} from 'react'; 
import {useSelector} from 'react-redux'


export default function Index(){
    //using react hooks to fetch the data from the server. 
    let [data_list,setData] = useState({})
    let [tabular,setTabular]=useState(<div></div>)
//    data_list.data_list.features=[] // to avoid an error coming from useState(). 
    let [match,setMatch]=useState([{ "type": "Feature", "properties": { "OBJECTID_1": 0, "OBJECTID": 0, "PAU_NAME": "", "VILLAGE": "", "PAU_CODE": "", "VILL_CODE": "", "ST_NAME": "", "ST_CODE":0, "LOC_NAME": "", "LOC_CODE": "", "AU_NAME": "", "AU_CODE": "", "Elec":0, "Phone":0, "WC":0, "OID_Join": "", "State": "", "County": "", "AU": "", "PAU": "", "M_0_4":0, "F_0_4": 57, "M_5_14": 81, "F_5_14": 96, "M_15_24": 45, "F_15_24": 76, "M_25_44": 37, "F_25_44": 69, "M_45_Plus": 26, "F_45_Plus": 39, "TOT_POP": 577, "Tot_HHS": 119, "Shape_Leng": 3946.73463636, "Shape_Le_1": 3946.73463636, "Shape_Area": 488029.18487400003, "Fam": null, "Census": null, "ES1": null, "ES2": null }, "geometry": { "type": "MultiPolygon", "coordinates": []} }])

    useEffect(()=>{ // there is a design probelm here , instead of fetch again for the same data, use redux 
        let fun= async()=>{await fetch('http://localhost:8000/state/paus/').then(res=>{return res.json()}).then(
            (data)=>{setData({data_list:data})})
    } 
        fun()  // this way of async fetching iniside useefect is described by the docs 
    },[])
    // getting a name from the reducer for search
    let name=useSelector(state=>state.SearchReducer.Name);
    // filling the data 
    useEffect(()=>{
        if(Object.keys(data_list).length!=0 && name!=''){
            let filtered_match=data_list['data_list']['features'].filter(match=>match.properties.pau_name===name)
            setMatch(filtered_match)
        }
        else{
    if(Object.keys(data_list).length!=0){
        let filtered_match =data_list['data_list']['features']
        setMatch(filtered_match)
    }
}
   
    },[data_list,name]) 
    
    useEffect(()=>{
        setTabular(<table style={{width:'100%',position:'relative',top:'38px'}}className='table table-striped'>    
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
            {match.map((block,index)=>   
            <tr key={index}>
                <td style={{fontFamily:'Cairo'}}>{block.properties.au_name}</td>
                <td style={{fontFamily:'Cairo'}}>{block.properties.pau_name}</td>
                <td style={{textAlign:'center',fontFamily:'Open Sans',fontSize:'19px'}}>{isNaN(parseInt(block.properties.census))?'No Data':parseInt(block.properties.census)}</td>
                <td style={{textAlign:'center',fontFamily:'Open Sans',fontSize:'19px'}}>{isNaN(parseInt(block.properties.es1))?'No Data':parseInt(block.properties.es1)}</td>
                <td style={{textAlign:'center',fontFamily:'Open Sans',fontSize:'19px'}}>{isNaN(parseInt(block.properties.es2))?'No Data':parseInt(block.properties.es2)}</td>
            </tr>)

            }
        </tbody>
    </table>)

    },[match])

    
    return(
            <div className='' style={{marginTop:'100px'}}>
                {tabular}
            </div>
    )
}