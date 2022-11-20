import { createTable } from "../table-scripts/createTable";



export function clickViewButton(element, data){

createTable(data)
const result = element.charAt(0).toUpperCase() + element.slice(1);
const nameLabel = document.getElementById("nameLabel");
nameLabel.innerText = result
const btnAdd = document.getElementById("btnAdd");
btnAdd.innerText = `New ${element}`

}