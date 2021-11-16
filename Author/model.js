const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Author {
    constructor(id, firstName, lastname, birthDate) {
        if (typeof id == 'number') {
            this.id = id;
        } else {
            throw Error("Invalid AuthorID value")
        }
        if (typeof firstName == 'string') {
            this.firstName = firstName;
        } else {
            throw Error("Invalid Author Firstname")
        }
        if (typeof lastname == 'string') {
            this.lastname = lastname;
        } else {
            throw Error("Invalid Author Lastname")
        }
        if (birthDate instanceof Date) {
            this.birthday = birthDate;
        } else {
            birthDate /= (1000* 3600 * 24)
            this.birthday = new Date(1970, 0,birthDate + 1);
        }
    }

    getFullName() {
        return `${this.firstName[0].toUpperCase()}.${this.lastname[0].toUpperCase()}${this.lastname.substring(1)}`
    }

    getFormattedBirthDate() {
        let d = this.birthday;

        return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    print() {
        console.log(`Author ID - ${this.id}`)
        console.log(`Author Firstname - ${this.firstName}`)
        console.log(`Author Lastname - ${this.lastname}`)
        console.log(`Author birthday - ${this.getFormattedBirthDate()}`)
    }

    toJSONString() {
        return JSON.stringify(this);
    }

    static fromJSON(json) {
        let newAuthor = this.isJSON(json) ? JSON.parse(json) : json;

        return new Author(newAuthor.id, newAuthor.firstName, newAuthor.lastname, newAuthor.birthday)
    }

    static isJSON(json) {
        try {
            JSON.parse(json)
        } catch (e) {
            return false
        }
        return true
    }
}
