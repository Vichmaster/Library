//функция заполнение данными
export function addDataTable(card) {
  for (let i = 0; i < card.length; i++) {
    let raw = document.createElement("tr");
    raw.innerHTML = "";
    document.querySelector(".local").appendChild(raw);
    const data = Object.entries(card[i]).map(([key, value]) => ({
      key: key,
      value: value,
    }));
    for (let i = 0; i < data.length; i++) {
      let col = document.createElement("td");
      col.innerHTML = `<td>${data[i].value}</td>`;
      document.querySelector(".local").appendChild(col);
      if (i === data.length - 1) {
        col.innerHTML = `<td>${"Push"}</td>`;
        document.querySelector(".local").appendChild(col);
      }
    }
  }
}
