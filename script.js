let myLibrary=[]

function Book(author, title, pagesRead, totalPages) {
    this.title = title
    this.author = author
    this.pagesRead = pagesRead
    this.totalPages = totalPages
}

function addBookToLibrary(author, title, pagesRead, totalPages){
    const newBook = new Book(author, title, pagesRead, totalPages);
    myLibrary.push(newBook);
}

function displayBooks(array){
    for (let i=0; i < myLibrary.length; i++){
        var newBookText = myLibrary[i].title + " by " + myLibrary[i].author + ", Pages Read: " myLibrary[i].pagesRead + " out of " + myLibrary[i].totalPages;

        var newP = document.createElement("p");
        newP.appendChild(document.createTextNode(newBookText)) ;
        
        var addToDiv = document.getElementById("library");
        addToDiv.appendChild(newP);
    }

}