// Type Aliases
function test(arg1, arg2) {
    if (typeof arg1 === 'string') {
        console.log(arg1 + arg2);
    }
    else {
        console.log('do nothing' + arg2);
    }
}
test(1, 'as number');
var book = { title: 'Javascript cookbook',
    author: 'Dongfeng' };
function getBook(book) {
    console.log(book.title);
}
getBook(book);
