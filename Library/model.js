class Library {
    static sortingTypes = Object.freeze({
        Ascending: 1,
        Descending: -1,
        NoSorting: 0
    })

    static filteringTypes = Object.freeze({
        greaterThanOrEqual: 1,
        lessThanOrEqual: -1,
        equal: 0
    })


    static sortBooksByTitle(books, sortType) {
        books.sort((b1, b2) => {
            return b1.title > b2.title ? sortType : -1 * sortType;
        });
    }

    static sortBooksByPageCount(books, sortType) {
        books.sort((b1, b2) => {
            return b1.pageCount > b2.pageCount ? sortType : -1 * sortType;
        });
    }

    static sortBooksByReadOn(books, sortType) {
        books.sort((b1, b2) => {
            return b1.read > b2.read ? sortType : -1 * sortType;
        });
    }

    static sortBooksByAuthorFullName(books, authors, sortType) {
        books.sort((b1, b2) => {
            return authors.filter((elem) => elem.id === b1.authorID)[0].getFullName() > authors.filter((elem) => elem.id === b2.authorID)[0].getFullName() ? sortType : -1 * sortType;
        });
    }


    static sortAuthorsByFullName(authors, sortType) {
        authors.sort((a1, a2) => {
            return a1.getFullName() > a2.getFullName() ? sortType : -1 * sortType;
        });
    }

    static sortAuthorsByBirthDate(authors, sortType) {
        authors.sort((a1, a2) => {
            return a1.birthday > a2.birthday ? sortType : -1 * sortType;
        });
    }


    static filterBooksByAuthorId(books, authorId) {
        return books.filter((book) => book.authorID === Number(authorId));
    }

    static filterBooksByReadOn(books, read) {
        return books.filter((book) => book.read === Number(read));
    }

    static filterBooksByPageCount(books, pageCount, filterType) {
        switch (filterType) {
            case 'greaterThanOrEqual':
                return books.filter(book => book.pageCount >= Number(pageCount));

            case 'lessThanOrEqual':
                return books.filter(book => book.pageCount <= Number(pageCount));

            case 'equal':
                return books.filter(book => book.pageCount === Number(pageCount));

            default:
                return [];
        }
    }


    static findBookById(books, id) {
        return books.filter((elem) => elem.id === id)[0];
    }


    static findAuthorById(authors, id) {
        return authors.filter((elem) => elem.id === id)[0];
    }
}
