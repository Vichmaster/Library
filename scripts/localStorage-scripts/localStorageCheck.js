import { setLocalStorage } from "./setLocalStorage";

//если локал сторедж пустой, заполняем его значениями по умолчанию
export function localStorageCheck() {
  //localStorage.clear()
  if (localStorage.length === 0) {
    setLocalStorage();
    console.log("Info add");
  }
}
