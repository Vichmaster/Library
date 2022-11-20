export function getStorage(object){

    const data = localStorage.getItem(object);
    const card = JSON.parse(data); 

    return card
}