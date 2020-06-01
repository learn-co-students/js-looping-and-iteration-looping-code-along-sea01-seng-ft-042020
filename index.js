// Code your solutions in this file
function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        console.log(message);
        cards.push(message);
    }
    return cards;
}

function countDown(integer) {
    let countdown = integer
    while (countdown >= 0) {
        console.log(countdown--);
    }

}