// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const event = "birthday"

function writeCards (names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

writeCards(names);



function countDown(num) {
    let i = num;
    while (i > -1) {
        console.log(i--);
    } 
}

countDown(10);