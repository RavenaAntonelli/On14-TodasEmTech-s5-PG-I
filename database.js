 //Para criar array dos livros
 const bookshelf = [
    {
        name: 'O guia do mochileiro das galáxias',
        pages: 208,
        author:'DOUGLAS ADAMS',
        category: 'FICCAO',
        suggestion: true,
        read: true
    },
    {
        name: 'Operação Cavalo de Tróia',
        pages: 560,
        author: 'J.BENITEZ',
        category: 'FICCAO',
        suggestion: true,
        read: true
    },
    {
        name: 'O pequeno príncipe',
        pages: 80,
        author: 'ANTOINE DE SAINTEXUPERY',
        category: 'FABULA',
        suggestion: true,
        read: false
    },
    {
        name: 'Os botões de Napoleão',
        pages: 344,
        author: 'PENNY LE COUTEUR',
        category: 'CIENCIAS EXATAS',
        suggestion:true,
        read: true
    },
    {
        name: 'Senhor dos anéis',
        pages:1200,
        author: 'J.R.R.TOLKIEN',
        category: 'FANTASIA',
        suggestion:true,
        read:false
    },
    {
        name: 'Memórias Póstumas de Brás Cubas',
        pages:368,
        author:'MACHADO DE ASSIS',
        category: 'ROMANCE',
        suggestion:true,
        read:true
    }
]

//exporta o array de objetos 
module.exports = bookshelf 