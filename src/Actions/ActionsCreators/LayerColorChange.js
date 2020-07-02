import { FillColorChange } from "../types";

export const colorChanger=(color)=>{
    let newColor = {type:FillColorChange,payload:color}; 
    return newColor; 
}
