//Initializing the array to store books
let myLibrary = [];


function Book(title, author, pages, hasRead) {
    // the book constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.info = function() {
  var readStatus = this.hasRead ? "read" : "not read yet";
  return this.title + " by " + this.author + ", " + this.pages + " pages, " + readStatus;
};

function addBookToLibrary() {
    // Adding books to the library
  var title = ''
  var author = '';
  var pages = '';
  var hasRead = '';

  var newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);
}

// Example usage:
addBookToLibrary();
console.log(myLibrary); // Output: Array containing the newly added book object
