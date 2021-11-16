/*
Create author.service.js, it should have
    -AuthorService model
    -Service should have Local  JSON string of authors
    -Service should have getAuthors() function, which returns Promise of array of author models
 */

class AuthorService {
    static authors = `[
        {
            "id": 1,
            "firstName": "Jack",
            "lastName": "London",
            "birthDate": -2965431480000
        },
        {
            "id": 2,
            "firstName": "Ernest",
            "lastName": "Hemingway",
            "birthDate": -2223169080000
        },
        {
            "id": 3,
            "firstName": "Mark",
            "lastName": "Twain",
            "birthDate": -4231450680000
        },
        {
            "id": 4,
            "firstName": "Charles",
            "lastName": "Dickens",
            "birthDate": -4982871480000
        }
    ]`;

    static isJSON(json) {
        try {
            JSON.parse(json);
        } catch (e) {
            return false;
        }
        return true;
    }

    static getAuthors() {
        return new Promise((resolve, reject) => {
            if (this.isJSON(AuthorService.authors)) {
                resolve(JSON.parse(AuthorService.authors).map((element) => {return new Author(element.id, element.firstName, element.lastName, element.birthDate)}));
            } else {
                reject([]);
            }

        })
    }
}