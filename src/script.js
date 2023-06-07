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
  var titleInput = document.querySelector('input[name="title"]').value;
  var authorInput = document.querySelector('input[name="author"]').value;
  var pagesInput = parseInt(document.querySelector('input[name="pages"]').value);
  var hasReadInput = document.querySelector('input[name="read-status"]:checked');

  var hasRead = hasReadInput ? true : false;

  var newBook = new Book(titleInput, authorInput, pagesInput, hasRead);
  myLibrary.push(newBook);

  // Clear input fields after adding book

  document.querySelector('input[name="title"]').value = '';
  document.querySelector('input[name="author"]').value = '';
  document.querySelector('input[name="pages"]').value = '';
  document.querySelector('input[name="read-status"]').checked = false;

  displayBooks();
}

function displayBooks() {
  var cardsContainer = document.querySelector('.cards-container');
  cardsContainer.innerHTML = ''; // Clear existing cards

  myLibrary.forEach(function(book) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h2>Title: ${book.title}</h2>
      <h2>Author: ${book.author}</h2>
      <h2>Pages: ${book.pages}</h2>
      <button class="read-btn">${book.hasRead ? 'Read' : 'Not Read'}</button>
    `;

    cardsContainer.appendChild(card);
  });
}


var bookCard = document.querySelector(".cards-container");
// Add event listener to the Add button
var addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission
  addBookToLibrary();
  bookCard.style.display = "flex";
});
