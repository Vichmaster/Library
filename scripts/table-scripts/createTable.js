import { addDataTable } from "./addDataTable";
import { addHeadTable } from "./addHeadTable";

//функция создания и заполнения таблицы
export function createTable(card) {
  document.querySelector(
    ".content"
  ).innerHTML = `<table class="local" ></table>`;

  addHeadTable(card);
  addDataTable(card);
}
