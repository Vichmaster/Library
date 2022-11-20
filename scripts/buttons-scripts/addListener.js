import { clickViewButton } from "./clickViewButton"


export function addListener(element, data){
    element.addEventListener("click", function(){
        clickViewButton(element.id, data)  
    })
    
}