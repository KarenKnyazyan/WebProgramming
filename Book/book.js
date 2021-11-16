class Book {
    constructor(id, title, authorID, pageCount, read) {
        if (typeof id == 'number') {
            this.id = id;
        } else {
            throw Error("Invalid BookID value")
        }
        if (typeof title == 'string') {
            this.title = title;
        } else {
            throw Error("Invalid book title")
        }
        if (typeof authorID == 'number') {
            this.authorID = authorID;
        } else {
            throw Error("Invalid book's authorID")
        }
        if (typeof pageCount == 'number') {
            this.pageCount = pageCount;
        } else {
            throw Error("Invalid book's pageCount")
        }
        if (typeof read == 'number' && read <= new Date().getFullYear()) {
            this.read = read;
        } else {
            throw Error("Invalid book's read year")
        }
    }

    print() {
        console.log(`Book ID - ${this.id}`)
        console.log(`Book Title - ${this.title}`)
        console.log(`Book's pageCount - ${this.pageCount}`)
        console.log(`Book read on - ${this.read}`)
    }

    toJSONString() {
        return JSON.stringify(this);
    }

    static fromJSON(json) {
        let newBook = this.isJSON(json) ? JSON.parse(json) : json;

        return new Book(newBook.id, newBook.title, newBook.authorID, newBook.pageCount, newBook.read)
    }

    static isJSON(json) {
        try {
            JSON.parse(json)
        } catch (e) {
            return false;
        }
        return true;
    }
}
