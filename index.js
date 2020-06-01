// Code your solutions in this file
function writeCards(people, event) {
    for (let i = 0; i < people.length; i++){
        people[i] = `Thank you, ${people[i]}, for the wonderful ${event} gift!`;
    }
    return people;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(count){
    while (count >= 0){
        console.log(count);
        count--;
    }
}
