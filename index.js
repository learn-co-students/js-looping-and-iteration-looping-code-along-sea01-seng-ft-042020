// Code your solutions in this file
function countDown() {
    let countdown = 10
    while (countdown >= 0)
    console.log(countdown--);
}

function writeCards(array, string) {
    let newarray = []
    for (let i = 0; i < array.length; i++){
        
            newarray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }
    return newarray
}

