const secondHand = document.querySelector('.sec-hand'); 
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegree}deg)`

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegree}deg)`

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(setDate, 1000);

setDate();