import React,{Fragment,useState,useEffect} from 'react'
import {SearchContainer,LeafSearchBar,Matchcard} from './styles/styles'
import Data from '../../../Components/Map/Selected_Areas.geojsonl.json'
import {searchItem} from "../../../Actions/ActionsCreators/Selection/SearchClick";
import {searchTableItem} from "../../../Actions/ActionsCreators/Selection/searchTableItem";
import {useSelector,useDispatch} from 'react-redux'
import {useRef} from 'react'

export default function Index() {
    let [cardmatches,setMatches] = useState([]); 
    let textInput = useRef(null);

    const changer=()=>{
        textInput.current.value='';
        let matches =[]; 
        showSearchResult(matches)
    }
    const handleChange=(e)=>{
        let BlockList = Data.features; 
        let matches = BlockList.filter(block=>{
            let regex = new RegExp(`^${e.target.value}`,'gi')
            return block.properties.PAU_NAME.match(regex)
        })
        if (e.target.value===''){
            matches=[]
        }
        showSearchResult(matches)
    }

    let showSearchResult=(matches)=>{
        setMatches(matches)
    }
    let view = useSelector(state=>state.ToggleView.View)
    let dispatch = useDispatch()
    let card = cardmatches.map(match=>
    <div onClick={()=>{if(view==='Map'){dispatch(searchItem(match));changer()}
                           else dispatch(searchTableItem(match.properties.PAU_NAME))
    }
    }>
        <Matchcard className='card card-body mb-1'>
            <h6 className='text-primary' style={{fontFamily:'Cairo'}}>{match.properties.PAU_NAME}</h6>
        </Matchcard>
    </div>
        )
    return (

        <Fragment>
            <SearchContainer>
            <LeafSearchBar ref={textInput} onChange={handleChange} placeholder='Search...' placeholderTextColor='green'></LeafSearchBar>
            {card}
            </SearchContainer>
        </Fragment>
    )
}
