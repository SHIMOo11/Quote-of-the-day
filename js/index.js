var quotesArray=[
    {
        'quote': 'The best revenge is massive success.',
        'author': 'Frank Sinatra'
    },
    {
        'quote': 'You miss 100% of the shots you don\'t take.',
        'author': 'Wayne Gretzy', 
    },
    {
    'quote': 'Do not take life too seriously. You will not get out alive.',
    'author': 'Elbert Hubbard'
    },
    { 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.',
    'author': 'Nelson Mandela',
    },
    {
    'quote': 'Beware of what you become in pursuit of what you want.',
    'author': 'Jim Rohn'
    },
    { 
    'quote': 'It\'s not what happens to you, but how you react to it that matters.',
    'author': 'Epictetus'
    }
];
function quotesFunc(){
var random= Number.parseInt(Math.random()*quotesArray.length + 1);
document.getElementById('quotes').innerHTML = `\"${quotesArray[random].quote}\"`;
document.getElementById('author').innerHTML = `--${quotesArray[random].author}`;
}
