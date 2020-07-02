import { FillColorChange } from "../types";

export const colorChanger=(color)=>dispatch=>(
    dispatch({type:FillColorChange,payload:color})
)