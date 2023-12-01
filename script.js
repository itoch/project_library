const addBtn = document.querySelector('.btn-add');
const body = document.querySelector('body');
const main = document.querySelector('.main');


const myLibrary = [];

function Book (title, author, pages, readindgStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readindgStatus = readindgStatus;
    this.info = function () {
        return `${this.title} by ${ this.author}, ${this.pages} pages, ${this.readindgStatus}.`;
    }
}


function addBookToLibrary () {

};


//add several books to lybrary for display
const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 295, 'not read yet');
const harryPotter = new Book('Harry Potter', 'J. K. Rowling', 305, 'read');
const toKillMockingbird = new Book('To Kill a Mockingbird', 'H. Lee', 281, 'read');
const theIdiot = new Book('The Idiot', 'F. Dostoevsky', 768, 'not read yet');

myLibrary.push(theHobbit,harryPotter,toKillMockingbird,theIdiot);

//display books

function displayBook (arr) {
    for(let i = 0; i< arr.length; i++) {
        if (!(arr[i])) {
            continue;
        }
        const card = document.createElement("div");
        card.innerText = arr[i].info();
        card.dataset.bigDick = `${i+1}`;
        main.appendChild(card);
        const btn = document.createElement('button');
        btn.innerText = 'Remove';
        btn.dataset.bigDick = `${i+1}`;
        card.appendChild(btn);
        
    }
};

displayBook(myLibrary);

const removeBtn = document.querySelectorAll('button[data-big-dick]');
removeBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
       console.log(e.target.dataset.bigDick);
       delete myLibrary[(e.target.dataset.bigDick) - 1];
       console.log(myLibrary);
       console.log(e.target);
       console.log(e.target.closest("div[data-big-dick]"));
       main.removeChild(e.target.closest("div[data-big-dick]"))
    //    displayBook(myLibrary);
        console.log(myLibrary);
    })
})
console.log(myLibrary);


// function deleteBook (i, arr) {
//     arr.splice(i,1);
// }