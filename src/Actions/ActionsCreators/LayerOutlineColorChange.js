import { OutlineColorChange } from "../types";

export const OutlinecolorChanger=(color)=>{
    let newColor = {type:OutlineColorChange,payload:color}; 
    return newColor; 
}
