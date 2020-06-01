// Code your solutions in this file
function writeCards(people, occasion) {
    let output =[]
    for (let i = 0; i < people.length; i++) {
        output.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`)
    }
    return output
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}