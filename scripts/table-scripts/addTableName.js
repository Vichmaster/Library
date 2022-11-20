//функция для получения заголовка таблицы
export function addTableName(card) {
  const keysArray = [];
  for (let name in card[0]) {
    const result = name.charAt(0).toUpperCase() + name.slice(1);
    //console.log(result);
    keysArray.push(result);
  }
  return keysArray;
}
