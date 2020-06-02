// Code your solutions in this file
function writeCards(names, event){
    let output = []
    for(let i = 0; i < names.length; i++){
        output.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    };
    return output
};

function countDown(num){
    while (num >= 0){
        console.log(num--)
    };
};