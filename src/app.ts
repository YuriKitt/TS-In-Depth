import { UL, ReferenceItem, RefBook } from './classes';
import { Category } from './enums';
import { printRefBook, calcTotalPages, createCustomerID, getAllbooks, getBookAuthorByIndex, getBookTitlesByCategory, getProperty, logBookTitles, logFirstAvailable, setDefaultConfig } from './functions';
import { Book, Logger, Author, Librarian, TOptions } from './interfaces';
import { PersonBook } from './types';
import type { Library } from './classes/library';
// import RefBook from './classes/encyclopedia';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ==============================
// ====================================
// Task 02.01

// console.log(getAllbooks());
// logFirstAvailable(getAllbooks());
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// ====================================
// Task 03.01

// let myID: string = createCustomerID('Ann', 10);
// console.log('myID :>> ', myID);
// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name, id) => "".concat(name, "-", id.toString());
// idGenerator = createCustomerID;
// console.log('idGenerator :>> ', idGenerator('Brom', 23));

// ====================================
// Task 03.02

// createCustomer('Ann');
// createCustomer('Ann', 12);
// createCustomer('Ann', 12, 'NewYork');
// console.log('getBookTitlesByCategory() :>> ', getBookTitlesByCategory());
// console.log('Category.JavaScript :>> ', getBookTitlesByCategory(Category.CSS));
// logFirstAvailable();
// console.log('getBookByID :>> ', getBookByID(1));
// let myBooks: string[] = сheckoutBooks('Ann', 1, 2, 4)
// console.log('myBooks :>> ', myBooks);

// ====================================
// Task 03.03

// let checkedOutBooks: string[] = getTitles(false);
// console.log('checkedOutBooks :>> ', checkedOutBooks);

// ====================================
// Task 03.04

// console.log(bookTitleTransform('123'));
// console.log(bookTitleTransform(123));

// ====================================
// Task 04.01

// let myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     // year: 2015,
//     // copies: 3
//     // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     markDamaged(reason: string) { console.log(`Damaged: ${reason}`) }
// }

// printBook(myBook);

// myBook.markDamaged('missing back cover');

// ====================================
// Task 04.02

// let logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// ====================================
// Task 04.03

// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 2
// }

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: null
// }

// ====================================
// Task 04.04

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log('offer.magazine :>> ', offer.magazine);
// console.log('offer.magazine.getTitle() :>> ', offer.magazine?.getTitle());
// console.log('offer.book.getTitle() :>> ', offer.book.getTitle?.());
// console.log('offer.book.authors[0]  object :>> ', offer.book.authors?.[0]);

// ====================================
// Task 04.05

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// ====================================
// Task 05.01

// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group'
// console.log(ref.publisher);
// console.log(ref.getID());

// ====================================
// Task 05.02

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);

// ====================================
// Task 05.03

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printCitation();

// ====================================
// Task 05.04

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// ====================================
// Task 05.05

// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     title: 'Unknown'
// }

// const option: TOptions = { duration: 20 };
// const option1: TOptions = setDefaultConfig(option);

// console.log('option :>> ', option);
// console.log('option1 :>> ', option1);
// console.log(Object.is(option, option1));

// ====================================
// Task 06.03

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// ====================================
// Task 06.04

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// ====================================
// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllbooks()[0]);

//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('complete'));
// }


// if (flag) {
//     const o = await import('./classes');
//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllbooks()[0]);

//     console.log(reader);
// }

// ====================================
// Task 06.06

// let library: Library = new Library();
// let library: Library = {
//     Id: 1,
//     name: 'Ann',
//     address: ''
// }
// console.log(library);
