class Book {
  constructor(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }
  printIsbn(){
    console.log(this.isbn);
  }
}
let book = new Book('title', 'pag', 'isbn');
console.log(book.title)

book.title = 'new title';

console.log(book.title)

class ITBook extends Book {
  constructor(title, pages, isbn, technology){
    super(title, pages, isbn);
    this.technology = technology
  }
  printTechnology(){
    console.log(this.technology);
  }
}

let jsBook = new ITBook('Learning Js Algorithms', '200', '12345', 'Javascript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());
