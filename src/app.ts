import { UL, ReferenceItem, RefBook, Shelf } from './classes';
import { Category } from './enums';
import {
    printRefBook,
    calcTotalPages,
    createCustomerID,
    getAllbooks,
    getBookAuthorByIndex,
    getBookTitlesByCategory,
    getProperty,
    logBookTitles,
    logFirstAvailable,
    setDefaultConfig,
    purge,
    getObjectProperty,
    createCustomer,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';
import { Book, Logger, Author, Librarian, TOptions, Magazine } from './interfaces';
import { BookRequiredFields, PersonBook, UpdatedBook, Š”reateCustomerFunctionType } from './types';
import { Library } from './classes/library';
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
// idGenerator = (name, id) => ''.concat(name, '-', id.toString());
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
// let myBooks: string[] = ŃheckoutBooks('Ann', 1, 2, 4)
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
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: null
// };

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
// };

// const option: TOptions = { duration: 20 };
// const option1: TOptions = setDefaultConfig(option);

// console.log('option :>> ', option);
// console.log('option1 :>> ', option1);
// console.log(Object.is(option, option1));

// ====================================
// Task 06.03. Default Export

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// ====================================
// Task 06.04. Re-Export

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// ====================================
// Task 06.05. Dynamic Import Expression
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
// Task 06.06. Type-Only Imports and Exports

// let library: Library = new Library();
// let library: Library = {
//     Id: 1,
//     name: 'Ann',
//     address: ''
// };
// console.log(library);

// ====================================
// Task 07.01. Generic Functions

// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result = purge(inventory);
// console.log(result);

// console.log(purge([1,2,3,4,5]));

// ====================================
// Task 07.02. Generic Interfaces and Classes
// Task 07.03. Generic Constraints

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();

// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFitst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag=> magazineShelf.add(mag));
// console.log(magazineShelf.getFitst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log (getObjectProperty(magazines[0],'title'));
// console.log (getObjectProperty<Book,'author'|'title'>(inventory[1],'author'));

// ====================================
// Task 07.04. Utility Types

// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular'
// };

// const updatedBook: UpdatedBook = {
//     id: 23,
//     pages: 300
// };

// let params: Parameters<Š”reateCustomerFunctionType>;
// params = ['Anna',30,'Kyiv'];
// createCustomer(...params);

// ====================================
// Task 08.01. Class Decorators (sealed)

// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();

// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;
// UL.UniversityLibrarian.prototype['a'] = 3;

// ====================================
// Task 08.02. Class Decorators that replace constructor functions (logger)

// const fLibrarian = new UL.UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.name = 'Anna';
// fLibrarian['printLibrarian']();

// ====================================
// Task 08.03. Method Decorator (writable)

// const fLibrarian = new UL.UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// ====================================
// Task 08.04. Method Decorator (timeout)

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();

// ====================================
// Task 08.05. Parameter Decorator (logParameter)

// const fLibrarian = new UL.UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.name ='Anna';
// fLibrarian.assistCustomer('Boris','Learn TypeScript');

// ====================================
// Task 08.06. Property Decorator

// const fLibrarian = new UL.UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);
// fLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// console.log(fLibrarian);

// ====================================
// Task 08.07. Accessor Decorator

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.copies = 10;
// refBook.copies = -10;
// refBook.copies = 1.5;
// console.log(refBook.copies);

// ====================================
// Task 09.01. Callback Functions
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// ====================================
// Task 09.02. Promises

// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log('then 1.0:', titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log('then 1.1:', n))
//     .catch(reason => console.log('catch 1:', reason));
// console.log('End');

// console.log('Begin');
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log('then 2:', titles))
//     .catch(reason => console.log('catch 2:', reason));
// console.log('End');

// ====================================
// Task 09.03. Async Functions

// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software).catch(err => console.log(err));
// console.log('End');
