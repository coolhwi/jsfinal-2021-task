const quotes=[
    {
        quote:"Love is the flower you've got to let grow",
        author: "John Lennon",
    },
    {
        quote:"Let us always meet each other with smile, for the smile is the beginning of love.",
        author:"Mother Teresa",
    },
    {
        quote:"Love isn't something you find. Love is something that finds you",
        author:"Loretta Young",
    },
    {
        quote:"Love begins by taking care of the closest ones - the ones at home.",
        author:"Mother Teresa",
    },
    {
        quote:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage",
        author:"Lao Tzu",
    }
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;