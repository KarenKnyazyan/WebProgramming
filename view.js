/*
Create view.js,
    which should get data from services and render some view after window initialization, it should
    -Have title – My Book List
    -Initializes books and authors
    -Render Dynamic Table of books, such as
 */
let headingDiv = document.getElementById('BookListHeading');
let listSpan = document.getElementById('list');


let titleSortingType = 1;

function createTitleEventListener(authors, books, title) {
    title.addEventListener('click', (event) => {
        let renderedRows = document.getElementById('renderedRows');
        let tableRows = document.getElementsByTagName('tr');
        while (tableRows.length !== 1) {
            tableRows[tableRows.length - 1].remove();
        }

        let titleArrow = document.getElementById('titleArrow');
        let authorArrow = document.getElementById('authorArrow');
        let pageCountArrow = document.getElementById('pageCountArrow');
        let readOnArrow = document.getElementById('readOnArrow');

        authorArrow.style.display = 'none';
        pageCountArrow.style.display = 'none';
        readOnArrow.style.display = 'none';

        renderedRows.remove();

        switch (titleSortingType) {
            case 1:
                Library.sortBooksByTitle(books, titleSortingType);
                updateTableBody(authors, books);
                titleArrow.style.display = 'block';
                titleSortingType = -1;
                authorSortingType = 1;
                pageCountSortingType = 1;
                readOnSortingType = 1;
                break;

            case -1:
                Library.sortBooksByTitle(books, titleSortingType);
                updateTableBody(authors, books);
                titleArrow.style.display = 'block';
                titleArrow.style.transform = 'rotate(180deg)';
                titleSortingType = 0;
                break;

            case 0:
                BookService.getBooks().then((value => {
                    updateTableBody(authors, value);
                }));
                titleArrow.style.display = 'none';
                titleArrow.style.transform = 'rotate(0deg)';
                titleSortingType = 1;
        }
    });
}

let authorSortingType = 1

function createAuthorEventListener(authors, books, author) {
    author.addEventListener('click', (event) => {
        let renderedRows = document.getElementById('renderedRows');
        let tableRows = document.getElementsByTagName('tr');
        while (tableRows.length !== 1) {
            tableRows[tableRows.length - 1].remove();
        }

        let titleArrow = document.getElementById('titleArrow');
        let authorArrow = document.getElementById('authorArrow');
        let pageCountArrow = document.getElementById('pageCountArrow');
        let readOnArrow = document.getElementById('readOnArrow');

        titleArrow.style.display = 'none';
        pageCountArrow.style.display = 'none';
        readOnArrow.style.display = 'none';

        renderedRows.remove();

        switch (authorSortingType) {
            case 1:
                Library.sortBooksByAuthorFullName(books, authors, authorSortingType);
                updateTableBody(authors, books);
                authorArrow.style.display = 'block';
                authorSortingType = -1;
                titleSortingType = 1;
                pageCountSortingType = 1;
                readOnSortingType = 1;
                break;

            case -1:
                Library.sortBooksByAuthorFullName(books, authors, authorSortingType);
                updateTableBody(authors, books);
                authorArrow.style.display = 'block';
                authorArrow.style.transform = 'rotate(180deg)';
                authorSortingType = 0;
                break;

            case 0:
                BookService.getBooks().then((value => {
                    updateTableBody(authors, value);
                }));
                authorArrow.style.display = 'none';
                authorArrow.style.transform = 'rotate(0deg)';
                authorSortingType = 1;
        }
    });
}

let pageCountSortingType = 1;

function createPageCountEventListener(authors, books, pageCount) {
    pageCount.addEventListener('click', (event) => {

        let renderedRows = document.getElementById('renderedRows');
        let tableRows = document.getElementsByTagName('tr');
        while (tableRows.length !== 1) {
            tableRows[tableRows.length - 1].remove();
        }

        let titleArrow = document.getElementById('titleArrow');
        let authorArrow = document.getElementById('authorArrow');
        let pageCountArrow = document.getElementById('pageCountArrow');
        let readOnArrow = document.getElementById('readOnArrow');

        titleArrow.style.display = 'none';
        authorArrow.style.display = 'none';
        readOnArrow.style.display = 'none';

        renderedRows.remove();

        switch (pageCountSortingType) {
            case 1:
                Library.sortBooksByPageCount(books, pageCountSortingType);
                updateTableBody(authors, books);
                pageCountArrow.style.display = 'block';
                pageCountSortingType = -1;
                authorSortingType = 1;
                titleSortingType = 1;
                readOnSortingType = 1;
                break;

            case -1:
                Library.sortBooksByPageCount(books, pageCountSortingType);
                updateTableBody(authors, books);
                pageCountArrow.style.display = 'block';
                pageCountArrow.style.transform = 'rotate(180deg)';
                pageCountSortingType = 0;
                break;

            case 0:
                BookService.getBooks().then((value => {
                    updateTableBody(authors, value);
                }));
                pageCountArrow.style.display = 'none';
                pageCountArrow.style.transform = 'rotate(0deg)';
                pageCountSortingType = 1;
        }
    });
}

let readOnSortingType = 1;

function createReadOnEventListener(authors, books, readOn) {
    readOn.addEventListener('click', (event) => {

        let renderedRows = document.getElementById('renderedRows');
        let tableRows = document.getElementsByTagName('tr');
        while (tableRows.length !== 1) {
            tableRows[tableRows.length - 1].remove();
        }

        let titleArrow = document.getElementById('titleArrow');
        let authorArrow = document.getElementById('authorArrow');
        let pageCountArrow = document.getElementById('pageCountArrow');
        let readOnArrow = document.getElementById('readOnArrow');

        titleArrow.style.display = 'none';
        authorArrow.style.display = 'none';
        pageCountArrow.style.display = 'none';

        renderedRows.remove();

        switch (readOnSortingType) {
            case 1:
                Library.sortBooksByReadOn(books, readOnSortingType);
                updateTableBody(authors, books);
                readOnArrow.style.display = 'block';
                readOnSortingType = -1;
                authorSortingType = 1;
                pageCountSortingType = 1;
                titleSortingType = 1;
                break;

            case -1:
                Library.sortBooksByReadOn(books, readOnSortingType);
                updateTableBody(authors, books);
                readOnArrow.style.display = 'block';
                readOnArrow.style.transform = 'rotate(180deg)';
                readOnSortingType = 0;
                break;

            case 0:
                BookService.getBooks().then((value => {
                    updateTableBody(authors, value);
                }));
                readOnArrow.style.display = 'none';
                readOnArrow.style.transform = 'rotate(0deg)';
                readOnSortingType = 1;
        }
    });
}


function updateTableHeader(authors, books) {
    let table = document.getElementById('bookList');
    let tableRow = document.createElement('tr');

    let Title = document.createElement('th');
    Title.id = "Title"
    Title.innerText = "Title";
    Title.style.backgroundColor = '#d16808';

    createTitleEventListener(authors, books, Title)

    let Author = document.createElement('th');
    Author.id = "Author";
    Author.innerText = "Author";
    Author.style.backgroundColor = '#d16808';

    createAuthorEventListener(authors, books, Author);

    let PageCount = document.createElement('th');
    PageCount.id = "PageCount";
    PageCount.innerText = "Page Count";
    PageCount.style.backgroundColor = '#d16808';

    createPageCountEventListener(authors, books, PageCount)

    let ReadOn = document.createElement('th');
    ReadOn.id = "ReadOn";
    ReadOn.innerText = "Read On";
    ReadOn.style.backgroundColor = '#d16808';

    createReadOnEventListener(authors, books, ReadOn);


    tableRow.append(Title);
    tableRow.append(Author);
    tableRow.append(PageCount);
    tableRow.append(ReadOn);

    table.append(tableRow);


    let titleArrow = document.createElement('div')
    titleArrow.id = 'titleArrow'
    titleArrow.innerText = 'V'
    Title.append(titleArrow);

    let authorArrow = document.createElement('div')
    authorArrow.id = 'authorArrow';
    authorArrow.innerText = 'V';
    Author.append(authorArrow);

    let pageCountArrow = document.createElement('div')
    pageCountArrow.id = 'pageCountArrow'
    pageCountArrow.innerText = 'V';
    PageCount.append(pageCountArrow);

    let readOnArrow = document.createElement('div')
    readOnArrow.id = 'readOnArrow'
    readOnArrow.innerText = 'V';
    ReadOn.append(readOnArrow);
}

function updateTableBody(authors, books) {
    let table = document.getElementById('bookList');

    let renderedRows = 0;
    for (let book of books) {
        let otherRow = document.createElement('tr');

        let title = document.createElement('td');
        title.innerText = book.title;
        title.className = book.title;

        let author = document.createElement('td');
        author.innerText = Library.findAuthorById(authors, book.authorID).getFullName();
        author.className = Library.findAuthorById(authors, book.authorID).getFullName();

        let pageCount = document.createElement('td');
        pageCount.innerText = book.pageCount;

        let readOn = document.createElement('td');
        readOn.innerText = book.read;

        otherRow.append(title);
        otherRow.append(author);
        otherRow.append(pageCount);
        otherRow.append(readOn);

        table.append(otherRow);
        ++renderedRows;
    }

    createPopupDiv(authors, books);


    let renderedRowsSpan = document.createElement('span');
    renderedRowsSpan.id = 'renderedRows'
    renderedRowsSpan.innerText = `There are ${renderedRows} rows`;

    headingDiv.after(renderedRowsSpan);

    let authorSelect = document.getElementById('selectAuthor');
    if (authorSelect) {
        authorSelect.remove();
    }
    authorsFilter(authors, books);

    let pageCountSelect = document.getElementById('selectPageCount');
    let pageCountInput = document.getElementById('inputPageCount');
    let pageCountFilterButton = document.getElementById('PageCountFilterButton');
    if (pageCountSelect) {
        pageCountSelect.remove();
        pageCountInput.remove()
        pageCountFilterButton.remove()
    }
    pageCountFilter(authors, books);

    let readOnInput = document.getElementById('inputReadOn');
    let readOnFilterButton = document.getElementById('ReadOnFilterButton');
    if (pageCountSelect) {
        readOnInput.remove();
        readOnFilterButton.remove()
    }
    readOnFilter(authors, books);
}

window.onload = function () {

    Promise.all([BookService.getBooks(), AuthorService.getAuthors()])
        .then((values) => {
            let books = values[0];
            let authors = values[1];

            let table = document.createElement('table');
            table.id = "bookList";
            headingDiv.after(table);
            updateTableHeader(authors, books);
            updateTableBody(authors, books);
        });
}

/**
 * Creates input field and filter button for page count
 * */
function readOnFilter(authors, books) {
    /**
     * Creating input for read on
     * */
    let inputReadOn = document.createElement('input');
    inputReadOn.id = 'inputReadOn';
    inputReadOn.placeholder = 'Input Read on Year';
    inputReadOn.type = 'number';

    let pageCountFilterButton = document.getElementById('PageCountFilterButton');
    pageCountFilterButton.after(inputReadOn);

    /**
     * Creating filter button for page count input field
     * */
    let filterButton = document.createElement('button');
    filterButton.innerText = 'Filter'
    filterButton.id = 'ReadOnFilterButton';

    let readOnInput = document.getElementById('inputReadOn');
    readOnInput.after(filterButton);

    /**
     * Creating Event Listener for filter button
     * */
    let clickFilterButton = document.getElementById('ReadOnFilterButton');
    clickFilterButton.addEventListener('click', (event) => {
        let readOnInput = document.getElementById("inputReadOn");
        let renderedRows = document.getElementById('renderedRows');
        let tableRows = document.getElementsByTagName('tr');
        while (tableRows.length !== 0) {
            tableRows[0].remove();
        }

        let inputtedValue = readOnInput.value
        if (!(readOnInput.value === "")) {
            renderedRows.remove();
            BookService.getBooks().then((value => {
                updateTableHeader(authors, books);
                updateTableBody(authors, Library.filterBooksByReadOn(value, inputtedValue));
            }));
            readOnInput.value = "";
        } else {
            renderedRows.remove();
            BookService.getBooks().then((value => {
                updateTableHeader(authors, books);
                updateTableBody(authors, value);
            }));
        }
    });
}

/**
 * Creates select field, input field and filter button for page count
 * */
function pageCountFilter(authors, books) {
    /**
     * Creating select field for page count
     * */
    let selectPageCount = document.createElement('select');
    selectPageCount.id = "selectPageCount";

    let defaultOption = document.createElement('option');
    defaultOption.innerText = 'No Sorting';
    defaultOption.value = 'NoSorting';
    selectPageCount.append(defaultOption);

    let greaterThanOrEqual = document.createElement('option');
    greaterThanOrEqual.innerText = 'Greater than or equal';
    greaterThanOrEqual.value = 'greaterThanOrEqual';
    selectPageCount.append(greaterThanOrEqual);

    let equal = document.createElement('option');
    equal.innerText = 'Equal';
    equal.value = 'equal';
    selectPageCount.append(equal);

    let lessThanOrEqual = document.createElement('option');
    lessThanOrEqual.innerText = 'Less than or equal';
    lessThanOrEqual.value = 'lessThanOrEqual';
    selectPageCount.append(lessThanOrEqual);

    let authorSelect = document.getElementById('selectAuthor')
    authorSelect.after(selectPageCount);

    /**
     * Creating input for page count
     * */
    let inputPageCount = document.createElement('input');
    inputPageCount.id = 'inputPageCount';
    inputPageCount.placeholder = 'Input Page Count';
    inputPageCount.type = 'number';

    let pageCountSelect = document.getElementById('selectPageCount')
    pageCountSelect.after(inputPageCount);

    /**
     * Creating filter button for page count input field
     * */
    let filterButton = document.createElement('button');
    filterButton.innerText = 'Filter'
    filterButton.id = 'PageCountFilterButton';

    let pageCountInput = document.getElementById('inputPageCount')
    pageCountInput.after(filterButton);

    /**
     * Creating Event Listener for filter button
     * */
    let clickFilterButton = document.getElementById('PageCountFilterButton');
    clickFilterButton.addEventListener('click', (event) => {

        let renderedRows = document.getElementById('renderedRows');
        let tableRows = document.getElementsByTagName('tr');
        while (tableRows.length !== 0) {
            tableRows[0].remove();
        }

        let inputtedValue = pageCountInput.value;
        if (!(pageCountInput.value === "")) {
            if (pageCountSelect.value !== 'NoSorting') {
                renderedRows.remove();
                BookService.getBooks().then((value => {
                    updateTableHeader(authors, books)
                    updateTableBody(authors, Library.filterBooksByPageCount(value, inputtedValue, pageCountSelect.value));
                }));

                pageCountInput.value = "";
            }
        } else {
            renderedRows.remove();
            BookService.getBooks().then((value => {
                updateTableHeader(authors, books);
                updateTableBody(authors, value);
            }));

            pageCountSelect.value = 'NoSorting';
        }

    })
}

/**
 * Creates select field for authors
 * */
function authorsFilter(authors, books) {
    let selectAuthor = document.createElement('select');
    selectAuthor.id = "selectAuthor";

    let defaultOption = document.createElement('option');
    defaultOption.innerText = 'No Author Selected';
    defaultOption.value = 'No Author Selected';
    selectAuthor.append(defaultOption);

    let option = document.createElement('option');
    option.innerText = 'All Authors';
    option.value = 'All Authors';
    selectAuthor.append(option);

    for (let author of authors) {
        let authorOption = document.createElement('option');
        authorOption.innerText = author.getFullName();
        authorOption.value = author.getFullName();

        selectAuthor.append(authorOption);
    }
    listSpan.after(selectAuthor);

    /**
     * Creating Event Listener for select field
     * */
    let authorSelect = document.getElementById("selectAuthor");
    authorSelect.addEventListener("change", (event) => {
        let tableRows = document.getElementsByTagName('tr');
        while (tableRows.length !== 0) {
            tableRows[0].remove();
        }

        let renderedRows = document.getElementById('renderedRows');
        renderedRows.remove();

        if (event.target.value === 'All Authors') {
            BookService.getBooks().then((value => {
                updateTableHeader(authors, books);
                updateTableBody(authors, value);
            }));
        }

        for (let a of authors) {
            if (a.getFullName() === event.target.value) {
                updateTableHeader(authors, books);
                BookService.getBooks().then((value => {
                    updateTableBody(authors, Library.filterBooksByAuthorId(value, a.id));
                }));
                break;
            }
        }
    });
}

/**
 * Creates popup fields
 * */
function createPopupDiv(authors, books) {
    // for (let currentAuthor of authors) {
    //     let authorInfo = document.createElement('div');
    //     authorInfo.style.width = '230px'
    //     authorInfo.id = currentAuthor.getFullName()
    //     authorInfo.className = 'AuthorInfo'
    //
    //     authorInfo.innerText = `${currentAuthor.getFullName()}
    //
    //     First Name : ${currentAuthor.firstName},
    //     Last Name : ${currentAuthor.lastname},
    //     BirthDate : ${currentAuthor.getFormattedBirthDate()}`;
    //
    //     authorInfo.style.display = 'none';
    //     document.body.append(authorInfo);
    // }

    let authorDiv = document.createElement('div')
    authorDiv.id = 'AuthorPopup';
    authorDiv.style.width = '230px';

    authorDiv.style.display = 'none';
    document.body.append(authorDiv);


    let bookDiv = document.createElement('div')
    bookDiv.id = 'BookPopup';
    bookDiv.style.width = '235px';

    bookDiv.style.display = 'none';
    document.body.append(bookDiv);

    // for (let currentBook of books) {
    //     let bookInfo = document.createElement('div');
    //     bookInfo.style.width = '235px'
    //     bookInfo.id = currentBook.title
    //     bookInfo.className = 'BookInfo'
    //
    //     bookInfo.innerText = `${currentBook.title}
    //
    //     Author : ${Library.findAuthorById(authors, currentBook.authorID).getFullName()},
    //     Page Count : ${currentBook.pageCount},
    //     Read On : ${currentBook.read}`;
    //
    //     bookInfo.style.display = 'none';
    //     document.body.append(bookInfo);
    // }

    createCloseButtons();

    createAuthorPopup(authors);
    createBookPopup(authors, books);
}

/**
 * Creates close buttons for popup fields
 * */
function createCloseButtons(){
    let authorPopupCloseButton = document.createElement('button');
    authorPopupCloseButton.innerText = 'x';
    authorPopupCloseButton.id = 'authorPopupCloseButton';
    authorPopupCloseButton.style.display = 'none';
    document.body.append(authorPopupCloseButton);

    let bookPopupCloseButton = document.createElement('button');
    bookPopupCloseButton.innerText = 'x';
    bookPopupCloseButton.id = 'bookPopupCloseButton';
    bookPopupCloseButton.style.display = 'none';
    document.body.append(bookPopupCloseButton);
}

/**
 * Generate popup field for authors
 * */
function createAuthorPopup(authorsArray) {
    let closeButton = document.getElementById('authorPopupCloseButton');

    let popupDiv = document.getElementById('AuthorPopup');

    for (let a of authorsArray) {
        let allAuthors = document.getElementsByClassName(`${a.getFullName()}`);


        for (let currentAuthor of allAuthors) {
            currentAuthor.addEventListener('click', (event) => {
                popupDiv.innerText = `${a.getFullName()}
    
                First Name : ${a.firstName},
                Last Name : ${a.lastname},
                BirthDate : ${a.getFormattedBirthDate()}`;
                popupDiv.style.display = "block";
                closeButton.style.display = 'block';

            });
        }
    }

    closeButton.addEventListener('click', (event) => {
        if (closeButton.style.display === 'block') {
            for (let a of authorsArray) {
                if (popupDiv.style.display === "block") {
                    popupDiv.style.display = "none";
                    closeButton.style.display = 'none';
                }
            }
        }
    });

    // for (let a of authorsArray) {
    //     let allAuthors = document.getElementsByClassName(`${a.getFullName()}`);
    //     let popupDiv = document.getElementById(a.getFullName());
    //
    //     for (let currentAuthor of allAuthors) {
    //         currentAuthor.addEventListener('click', (event) => {
    //             if (popupDiv.style.display === "none") {
    //                 if (authorsArray.every(checkEveryAuthors)) {
    //                     popupDiv.style.display = "block";
    //                     closeButton.style.display = 'block';
    //                 }
    //                 // else {
    //                 //     popupDiv.style.display = "block";
    //                 // }
    //             }
    //         });
    //     }
    // }
    //
    // closeButton.addEventListener('click', (event) => {
    //     if (closeButton.style.display === 'block') {
    //         for (let a of authorsArray) {
    //             if (document.getElementById(a.getFullName()).style.display === "block") {
    //                 document.getElementById(a.getFullName()).style.display = "none";
    //                 closeButton.style.display = 'none';
    //             }
    //         }
    //     }
    // });
}

/**
 * Generate popup field for books
 * */
function createBookPopup(authorsArray, booksArray) {

    let closeButton = document.getElementById('bookPopupCloseButton');

    let popupDiv = document.getElementById('BookPopup');

    for (let b of booksArray) {
        let allBooks = document.getElementsByClassName(`${b.title}`);


        for (let currentBook of allBooks) {
            currentBook.addEventListener('click', (event) => {
                popupDiv.innerText = `${b.title}

                Author : ${Library.findAuthorById(authorsArray, b.authorID).getFullName()},
                Page Count : ${b.pageCount},
                Read On : ${b.read}`;

                popupDiv.style.display = 'block';
                closeButton.style.display = 'block';
            });
        }
    }

    closeButton.addEventListener('click', (event) => {
        if (closeButton.style.display === 'block') {
            for (let a of authorsArray) {
                if (popupDiv.style.display === "block") {
                    popupDiv.style.display = "none";
                    closeButton.style.display = 'none';
                }
            }
        }
    });


    // let closeButton = document.getElementById('bookPopupCloseButton');
    // for (let b of booksArray) {
    //     let allBooks = document.getElementsByClassName(`${b.title}`);
    //     let popupDiv = document.getElementById(b.title);
    //
    //     for (let currentBook of allBooks) {
    //         currentBook.addEventListener('click', (event) => {
    //             if (popupDiv.style.display === "none") {
    //                 if (booksArray.every(checkEveryBooks)) {
    //                     popupDiv.style.display = "block";
    //                     closeButton.style.display = "block";
    //                 }
    //             }
    //         });
    //     }
    // }
    //
    // closeButton.addEventListener('click', (event) => {
    //     if (closeButton.style.display === 'block') {
    //         for (let b of booksArray) {
    //             if (document.getElementById(b.title).style.display === "block") {
    //                 document.getElementById(b.title).style.display = "none";
    //                 closeButton.style.display = 'none';
    //             }
    //         }
    //     }
    // });
}
