const addBtn = document.querySelector(".btn-add");
const body = document.querySelector("body");
const main = document.querySelector(".main");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const progress = document.getElementById("progress");
let readindgStatus = "Didn't read";

const myLibrary = [];

function Book(title, author, pages, readindgStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readindgStatus = readindgStatus;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readindgStatus}.`;
  };
}

//add several books to lybrary for display
const theHobbit = new Book(
  "The Hobbit",
  "J. R. R. Tolkien",
  295,
  "not read yet"
);
const harryPotter = new Book("Harry Potter", "J. K. Rowling", 305, "read");
const toKillMockingbird = new Book(
  "To Kill a Mockingbird",
  "H. Lee",
  281,
  "read"
);
const theIdiot = new Book("The Idiot", "F. Dostoevsky", 768, "not read yet");

myLibrary.push(theHobbit, harryPotter, toKillMockingbird, theIdiot);

//display books

function displayBook(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      continue;
    }
    const card = document.createElement("div");
    card.innerText = arr[i].info();
    card.dataset.bookCard = `${i + 1}`;
    main.appendChild(card);
    const btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.dataset.bookCard = `${i + 1}`;
    card.appendChild(btn);

    const statusBtn = document.createElement('button');
    statusBtn.innerText = "Status";
    card.appendChild(statusBtn);

    statusBtn.addEventListener('click', function (e) {
      // console.log(e.target.closest('div[data-book-card]').dataset.bookCard);
      // console.log(myLibrary[e.target.closest('div[data-book-card]').dataset.bookCard-1].readindgStatus = "Didn't read");

    })

  }
}

displayBook(myLibrary);

//remove button

const removeBtn = document.querySelectorAll("button[data-book-card]");
removeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.dataset.bookCard);
    delete myLibrary[e.target.dataset.bookCard - 1];
    console.log(myLibrary);
    console.log(e.target);
    console.log(e.target.closest("div[data-book-card]"));
    main.removeChild(e.target.closest("div[data-book-card]"));
    //    displayBook(myLibrary);
    console.log(myLibrary);
  });
});
console.log(myLibrary);

//add book to the array

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    progress.value
  );
  myLibrary.push(newBook);
  // displayBook(myLibrary);
  addBook(myLibrary);

  document.querySelector("form").reset();

  console.log(myLibrary[myLibrary.length - 1]);
});

addBtn.addEventListener("click", function () {});

// create card

function addBook(arr) {
  const card = document.createElement("div"); 
  card.innerText = arr[arr.length - 1].info();
  card.dataset.bookCard = `${arr.length}`;
  main.appendChild(card);
  const btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.dataset.bookCard = `${arr.length}`;
  card.appendChild(btn);

  btn.addEventListener("click", (e) => {
    delete myLibrary[e.target.dataset.bookCard - 1];
    main.removeChild(e.target.closest("div[data-book-card]"));
  });

  console.log(myLibrary);
}

//remove card button

function removeCard(btn, e) {
  btn.addEventListener("click", (e) => {
    delete myLibrary[e.target.dataset.bookCard - 1];
    main.removeChild(e.target.closest("div[data-book-card]"));
  });
}

// toggle status



/*Book
author: "J. R. R. Tolkien"
info:ƒ ()
pages:295
readindgStatus:"not read yet"
title:"The Hobbit"*/
