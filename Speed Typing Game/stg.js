const quotesDatabase = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
    "Don’t let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur. - Mohnish Pabrai",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
];
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');
    const correct = true;
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if(character == null){
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        }
        else if(character === characterSpan.innerText){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        }
        else{
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correct = false;

        }
    })
    if(correct) getRandomQuote()
})

let startTime;
function startTimer(){
    startTime = new Date()
    setInterval(() =>{
        timerElement.innerText = getTimerTime()
    },1000)
}

function getTimerTime(){
    return Math.floor((new Date() - startTime) / 1000)
}
  
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesDatabase.length);
    return quotesDatabase[randomIndex];
}

console.log(getRandomQuote());


function functioningElement(){
    quoteDisplayElement.innerHTML = '';
    quoteInputElement.value = null;
}

functioningElement();

getRandomQuote().split('').forEach(character => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
})


