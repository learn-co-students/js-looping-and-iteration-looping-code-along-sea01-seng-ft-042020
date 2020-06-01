// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(array, word) {
    let a = [];
    for (let i = 0; i < gifts.length; i++) {
        let ans = `Thank you, ${array[i]}, for the wonderful ${word} gift!`;
        console.log(ans);
        a.push(ans);
    }
    return a;
}

function countDown(num){
    while (num >= 0){
        console.log(num)
        num -= 1
    }
}