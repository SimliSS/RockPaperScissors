/*write a function to return either 'Rock,'Paper' or 'Scissors'.*/
const getComputerChoice = [
    "Rock", 
    "Paper",
    "Scissors", 
];

/*generates a random item*/
const randomItem=getComputerChoice[Math.floor(Math.random()*getComputerChoice.length)];
console.log(randomItem);