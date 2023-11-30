'use strict';

// console.log(document.querySelector('.message').textContent);


let score = 20;
let number = Math.trunc(Math.random() * 20 ) + 1;

const display = function(message) {

    return document.querySelector('.score').textContent = message;

 }

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);


    if (!guess) {
        
       display("No Numebr!");
    } else if (guess === number) {
        const exact = document.querySelector('.message').textContent = "That's it 💖 ";
        document.querySelector('body').style.backgroundColor = '#2FFE2F';
        document.querySelector('.number').textContent = number;
} 
    

    else if (guess !== number) {

        if (score > 1) {
            const diff = document.querySelector('.message').textContent = (guess > number) ? "Too High !!" : "Too Low!!";
            score--;
            display(score);  
            } else {
            document.querySelector('.message').textContent = "you lost !!";
            display('0');  
            }    
    }
} 
 )
 
 
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = Math.trunc(Math.random() * 20 ) + 1;
    display(score);   
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '' ;
    document.querySelector('body').style.backgroundColor = '#222' ;

})


