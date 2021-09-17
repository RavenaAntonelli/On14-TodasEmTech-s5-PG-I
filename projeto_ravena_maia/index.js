console.log('--------------------------------------');
console.log('     Project                        ');
console.log('             by Ravena :*        ');
console.log('--------------------------------------');


//tabela de livros

const bookshelf = require('./database')
console.table(bookshelf);

//para organizar a tabela pelo número de páginas
bookshelf.sort((a, b) => a.pages - b.pages)
console.table(bookshelf);


const openTheDoor = require('readline-sync');


const byAuthor = openTheDoor.question('Voce deseja encontrar um livro por autor?(S/N)').toLocaleUpperCase()
console.log(byAuthor);



if (byAuthor === 'S') {
    console.log('Certifique-se que o nome do autor esteja em letras maiúsculas.')
    
    const nameAuthor = openTheDoor.question('Qual autor quer encontrar?').toLocaleUpperCase()
    console.log('Essas são as obras desse autor:') 
    //filtrando as obras por autor
    
function author(bookshelf) {
    return bookshelf.author === nameAuthor
}

const foundAuthor = bookshelf.filter(author)
console.table(foundAuthor)

}else {
    console.log('Essas são todas as obras que possuimos.')
    console.table(bookshelf)

}

const byCategory = openTheDoor.question('Voce deseja encontrar um genero literario?(S/N)').toLocaleUpperCase()
console.log(byCategory);

if (byCategory === 'S') {
    console.log('Certifique-se de escrever com letras maiúsculas.')

    const categoryOptions = openTheDoor.question('Qual genero literario voce prefere?').toLocaleUpperCase()
    console.log('Essas são nossas opções:')
    
function category(bookshelf)  {
    return bookshelf.category === categoryOptions
}

const possibleCategory = bookshelf.filter(category)
console.table(possibleCategory);

}else {
    console.log('Esses são nossos livros.')
    return console.table(bookshelf)

}

const suggestion = openTheDoor.question('Voce gostaria de alguma recomendacao?(S/N)').toLocaleUpperCase();

if (suggestion === 'S'){
    console.log('Confere nossas dicas:');

function bySuggestion(database){
    return database.read == true
}
 const bookSuggestions = bookshelf.filter(bySuggestion)
 console.table(bookSuggestions)
}else{
    console.log('Agradecemos a visita!')
}

console.log('--------------------------------------');
console.log('    Obrigada pela visita!             ');
console.log('--------------------------------------');

