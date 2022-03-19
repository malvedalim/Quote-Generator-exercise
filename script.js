const quoteContainer = document.getElementById('quote-container');
const textQuote = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote');
const author = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const facebookBtn = document.getElementById('facebook')
let apiQuotes = [];

function newQuote(){

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  
     
    if (!quote.author){
        author.textContent = "Unknown";
    }else{
        author.textContent = quote.author;
    }
    textQuote.textContent = quote.text;
}
//FETCH WEB API TO GET QUOTES

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
    }
}

function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${textQuote.textContent} - ${author.textContent}`;
    window.open(twitterURL, '_blank');
} 

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();