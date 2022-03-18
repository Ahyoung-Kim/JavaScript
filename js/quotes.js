const quotes=[
    {
        quote: "Don't dwell on the past",
    },
    {
        quote: "Believe in yourself",
    },
    {
        quote: "Follow your heart",
    },
    {
        quote: "Seize the day",
    },
    {
        quote: "You only live once",
    },
    {
        quote: "Past is just past",
    },
    {
        quote: "Love yourself",
    },
    {
        quote: "Where there is a will there is a way",
    },
    {
        quote: "Don't beat yourself up",
    },
    {
        quote: "Life is a journey",
    }
];

const quote=document.querySelector("#quote span:first-child");

const len = quotes.length;
const idx = Math.floor(Math.random()*len);

const todaysQuote=quotes[idx];

quote.innerText = todaysQuote.quote;