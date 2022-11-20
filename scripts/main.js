import { addListener } from "./buttons-scripts/addListener";
import { getStorage } from "./localStorage-scripts/getStorage";
import { localStorageCheck } from "./localStorage-scripts/localStorageCheck";
import { createTable } from "./table-scripts/createTable";

//заполняем сторедж, если он пуст
localStorageCheck();

//получаем массивы для таблицы
const books = getStorage('books')
const clients = getStorage('clients')
const cards = getStorage('cards')
const statistic = []

//находим кнопки и назначаем обработчики
const btnBook = document.getElementById("books");
const btnCard = document.getElementById("cards");
const btnClient = document.getElementById("clients");
const btnStatistic = document.getElementById("statistic");

addListener(btnBook, books)
addListener(btnCard, cards)
addListener(btnClient, clients)
addListener(btnStatistic, statistic)



function getStatistic(){
    const books = getStorage('books')
    const clients = getStorage('clients')
    const mostPopular = []
    const mostActive  = []

    books.sort((a, b) => a.popularCount < b.popularCount ? 1 : -1);
    clients.sort((a, b) => a.activesCount < b.activesCount ? 1 : -1);
    //console.log(books)
    for(let i=0; i<5;i++){
        mostActive.push(clients[i])
        mostPopular.push(books[i])
        //console.log(clients[i].fullName)
        //console.log(books[i])       
    }
   
   createTable(mostActive)
   createTable(mostPopular)
   let col = document.createElement("td");
   for(let i=0; i<5;i++){
   
   
    col.innerHTML = `<td>${books[i].popularCount}</td>`;
    document.querySelector(".local").appendChild(col);    
}
   
   
}
        
    
   



//npm run serve

