const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";


async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by " + author.innerHTML,"tweet window" )
}

function copy(){
    navigator.clipboard.writeText(quote.innerHTML + " --- by " + author.innerHTML);   
}

getquote(api_url);


// <-----------------------jokejs--------------------->


const jokeEl =  document.getElementById('joke');
const get_joke =  document.getElementById('get_joke');


get_joke.addEventListener('click', generateJoke);
 


async function generateJoke(){


const jokeRes = await fetch('https://icanhazdadjoke.com/',
{
 headers: {
    accept: 'application/json'
 }

}
);

const joke = await jokeRes.json();


 jokeEl.innerHTML = joke.joke;

}

function tweet2(){
    window.open("https://twitter.com/intent/tweet?text=" + jokeEl.innerHTML,"tweet window" )
}


function copy2(){
    navigator.clipboard.writeText(jokeEl.innerHTML);
}
generateJoke();


//-----------button----------------->



