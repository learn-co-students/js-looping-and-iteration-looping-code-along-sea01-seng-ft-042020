// Code your solutions in this file


function writeCards(names, event) {
    for (let i = 0; names.length; i++) {
        names[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return names;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}