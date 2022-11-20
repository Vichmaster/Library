import { addTableName } from "./addTableName";

//функция формирование заголовка
export function addHeadTable(card) {
  const namesArray = addTableName(card);

  for (let i = 0; i < namesArray.length; i++) {
    let col = document.createElement("td");
    col.innerHTML = `<th>${namesArray[i]}</th>`;
    document.querySelector(".local").appendChild(col);
    if (i === namesArray.length - 1) {
      col.innerHTML = `<th>${"Edit"}</th>`;
      document.querySelector(".local").appendChild(col);
    }
  }
}
