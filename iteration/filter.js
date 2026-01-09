const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const History = books.filter((book) => book.genre == 'History')
const Fiction = books.filter((book) => book.genre == 'Fiction')
const Science = books.filter((book) => book.genre == 'Science')
const NonFiction = books.filter((book) => book.genre == 'Non-Fiction')

// console.table(History)
// console.table(Fiction)
// console.table(Science)
// console.table(NonFiction)

const After1990 = books.filter((book) => {return book.publish > 1990 && book.genre == 'Science'})

console.table(After1990)
