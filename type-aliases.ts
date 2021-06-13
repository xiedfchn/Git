// Type Aliases

type Combinable  =  string | number
type Description = 'as number' | 'as text'


function test(arg1: Combinable, arg2: Description) {
    if(typeof arg1 === 'string') {
        console.log(arg1 + arg2);
    } else {
        console.log('do nothing' +arg2)
    }
}
test(1, 'as number')


// Interfaces VS Type Aliase


interface Book {
    title: string
}
interface Book {
    author: string
}


const book: Book = { title: 'Javascript cookbook',
author: 'Dongfeng'}
function getBook(book: Book) {
    console.log(book.title);
} 

getBook(book)
