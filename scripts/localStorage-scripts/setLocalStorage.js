export function setLocalStorage() {
  //создаем массив клиентов
  const clients = [
    {
      id: 1,
      fullName: "Colette Kelley",
      phone: "012 435 45 67",
      activesCount: "6",
    },
    {
      id: 2,
      fullName: "Ruby-Rose Lennon",
      phone: "012 647 34 24",
      activesCount: "2",
    },
    {
      id: 3,
      fullName: "Leanne Gibbons",
      phone: "012 879 78 45",
      activesCount: "1",
    },
    {
      id: 4,
      fullName: "Rumaisa Peel",
      phone: "012 435 45 67",
      activesCount: "7",
    },
    {
      id: 5,
      fullName: "Gene Medrano",
      phone: "012 245 47 89",
      activesCount: "9",
    },
    {
      id: 6,
      fullName: "Sheridan Tucker",
      phone: "012 345 85 90",
      activesCount: "8",
    },
    {
      id: 7,
      fullName: "Christina Mack",
      phone: "012 123 36 46",
      activesCount: "4",
    },
    {
      id: 8,
      fullName: "Everly Moses",
      phone: "012 678 99 74",
      activesCount: "10",
    },
    {
      id: 9,
      fullName: "Kara Feeney",
      phone: "012 456 96 53",
      activesCount: "5",
    },
    {
      id: 10,
      fullName: "Cameron Rennie",
      phone: "012 967 47 85",
      activesCount: "3",
    },
  ];

  //создаем массив с книгами
  const books = [
    {
      id: 1,
      name: "JS Part 1",
      authorName: "Mel Gibson",
      publisherName: "GG",
      publishingYear: "2000",
      numberOfPages: "345",
      countExist: "39",
      popularCount: 12,
    },
    {
      id: 2,
      name: "JS Part 2",
      authorName: "Mel Gibson",
      publisherName: "GG",
      publishingYear: "2003",
      numberOfPages: "456",
      countExist: "61",
      popularCount: 34,
    },
    {
      id: 3,
      name: "HTML + CSS book",
      authorName: "Bruce Li",
      publisherName: "JHS",
      publishingYear: "1990",
      numberOfPages: "747",
      countExist: "12",
      popularCount: 8,
    },
    {
      id: 4,
      name: "Bootstrap",
      authorName: "Ip Man",
      publisherName: "UYT",
      publishingYear: "2010",
      numberOfPages: "123",
      countExist: "45",
      popularCount: 45,
    },
    {
      id: 5,
      name: "SQL Part 1",
      authorName: "Mila Yovovich",
      publisherName: "LKJ",
      publishingYear: "2000",
      numberOfPages: "757",
      countExist: "56",
      popularCount: 56,
    },
    {
      id: 6,
      name: "SQL Part 2",
      authorName: "Mila Yovovich",
      publisherName: "LKJ",
      publishingYear: "2001",
      numberOfPages: "234",
      countExist: "34",
      popularCount: 34,
    },
    {
      id: 7,
      name: "SQL Part 3",
      authorName: "Mila Yovovich",
      publisherName: "LKJ",
      publishingYear: "2002",
      numberOfPages: "534",
      countExist: "23",
      popularCount: 22,
    },
    {
      id: 8,
      name: "PHP for beginners",
      authorName: "Mark Cukerberg",
      publisherName: "NewYork",
      publishingYear: "2005",
      numberOfPages: "745",
      countExist: "17",
      popularCount: 78,
    },
    {
      id: 9,
      name: "C# for beginners",
      authorName: "Mark Cukerberg",
      publisherName: "NewYork",
      publishingYear: "2010",
      numberOfPages: "456",
      countExist: "67",
      popularCount: 45,
    },
    {
      id: 10,
      name: "C++ for beginners",
      authorName: "Mark Cukerberg",
      publisherName: "NewYork",
      publishingYear: "1996",
      numberOfPages: "987",
      countExist: "45",
      popularCount: 99,
    },
  ];

  //создаем массив с кард айди
  const cards = [
    {
      id: 1,
      clientId: 3,
      bookId: 8,
      getData: "12.01.2019",
      returnData: "12.032019",
    },
    { id: 2, clientId: 1, bookId: 3, getData: "12.01.2019", returnData: "" },
    { id: 3, clientId: 7, bookId: 10, getData: "12.01.2019", returnData: "" },
    {
      id: 4,
      clientId: 8,
      bookId: 6,
      getData: "12.01.2019",
      returnData: "12.032019",
    },
    {
      id: 5,
      clientId: 10,
      bookId: 2,
      getData: "12.01.2019",
      returnData: "12.032019",
    },
    {
      id: 6,
      clientId: 9,
      bookId: 9,
      getData: "12.01.2019",
      returnData: "12.032019",
    },
    { id: 7, clientId: 2, bookId: 4, getData: "12.01.2019", returnData: "" },
    { id: 8, clientId: 4, bookId: 7, getData: "12.01.2019", returnData: "" },
    { id: 9, clientId: 6, bookId: 5, getData: "12.01.2019", returnData: "" },
    { id: 10, clientId: 5, bookId: 1, getData: "12.01.2019", returnData: "" },
  ];

  //добавляем всё в локал сторедж
  localStorage.setItem("clients", JSON.stringify(clients));
  localStorage.setItem("books", JSON.stringify(books));
  localStorage.setItem("cards", JSON.stringify(cards));
}
