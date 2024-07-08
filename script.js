'use strict';

/**
 * Bibblan
 */

const book = {
    title: 'Doe Jane Jump Two',
    author: 'Baracka Obama',
    numPages: 333
};

const books = [Object.create(book), Object.create(book), Object.create(book), Object.create(book), book];

books[0].title = 'jaguar';
books[1].title = 'tiger';
books[2].title = 'volvo uprising';
books[3].title = 'sunset';

function searchTitle(books, title) {
    let result = books.filter(book => book.title === title);
    return result.length === 1 ? result[0] : null;
}

console.log(searchTitle(books, 'Doe Jane Jump Two'));


/**
 * Letter Frequency
 */

console.log(letterFrequency("kalle"));
console.log(letterFrequency("aaaa"));
console.log(letterFrequency("ni talar bra latin"));


function letterFrequency(text) {
    const frequency = {};
    const letters = text.split('');
    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        if (!frequency[letter]) {
            frequency[letter] = 1;
        } else {
            frequency[letter]++;
        }
    }
    return frequency;
}


/**
 * User Register
 */


function filterByCountry(users, countryCode) {
    return users.filter(user => user.nat === countryCode);
}

function listEmails(users) {
    return users.map(user => user.email);
}

function reformatEmails(users) {
    for (const user in users) {
        const firstName = users[user].name.first;
        const lastName = users[user].name.last;
        users[user].email = `${lastName}.${firstName}@evilcorp.countrydomain`;
    }

    return users;
}

console.log(filterByCountry(users, 'FR'));
console.log(listEmails(users));
console.log(reformatEmails(users));