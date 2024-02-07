const addBtn = document.querySelector(".btn-add");
const body = document.querySelector("body");
const main = document.querySelector(".main");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const progress = document.getElementById("progress");
let readindgStatus = "Want to read";

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
  "Want to read"
);
  
const harryPotter = new Book(
  "Harry Potter",
  "J. K. Rowling",
  305,
  "Read"
);

const toKillMockingbird = new Book(
  "To Kill a Mockingbird",
  "H. Lee",
  281,
  "Read"
);
  
const theIdiot = new Book(
    "The Idiot",
  "F. Dostoevsky",
  768,
  "Want to read"
);

myLibrary.push(theHobbit, harryPotter, toKillMockingbird, theIdiot);

//display books

function displayBook(arr) {
  for (let i = 0; i < arr.length; i++) {
    
    const card = document.createElement("div");

    card.innerText = arr[i].info();
    card.dataset.bookCard = `${i + 1}`;
    main.appendChild(card);

    createBtns(card, arr, i);

  }
}


function createBtns(card, arr, i, currBook) {
  const btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.classList.add("remove-btn");
  card.appendChild(btn);  

  const statusBtn = document.createElement('button');
  statusBtn.innerText = arr[i] ? arr[i].readindgStatus : currBook.readindgStatus; // что бы работала в функции addBook т.к. там у меня нет доступа к итератору, а только к currBook. В displayBook напротив - нет currBook.
  card.appendChild(statusBtn);

  removeBtnEvent(btn);
  statusBtnEvent(statusBtn);
}

displayBook(myLibrary);

//add eventListener to remove button.

function removeBtnEvent(btn) {
  btn.addEventListener("click", (e) => {
    delete myLibrary[e.target.closest("div[data-book-card]").dataset.bookCard - 1];
    main.removeChild(e.target.closest("div[data-book-card]"));
  });
}

//add eventListener to status button

function statusBtnEvent(statusBtn) {
  statusBtn.addEventListener('click', function (e) {
    const currObj = myLibrary[e.target.closest('div[data-book-card]').dataset.bookCard - 1];
    console.log(currObj);
    changingStatus(currObj, statusBtn);
  })
}

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

// create card

function addBook(arr) {
  const card = document.createElement("div");

  const currBook = arr[arr.length - 1];
  card.innerText = currBook.info();
  card.dataset.bookCard = `${arr.length}`;
  main.appendChild(card);

  createBtns(card, arr, undefined,currBook); // чем заменить undefined чтобы пропустить аргумент "i"


}

// toggle status

/*Book
author: "J. R. R. Tolkien"
info:ƒ ()
pages:295
readindgStatus:"not read yet"
title:"The Hobbit"*/


//function that toggle readingStatus

function changingStatus(currObj, statusBtn) {
  if (currObj.readindgStatus == "Read") {
    currObj.readindgStatus = "Want to read";
    statusBtn.innerText = "Want to read";
    
  } else {
    currObj.readindgStatus = "Read";
    statusBtn.innerText = "Read";

  }   
}