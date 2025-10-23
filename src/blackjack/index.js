import {createDeck, getCardValue, getCard, pcTurn, createCard, getPoints} from './usecases'
'use strict';

let deck = [];
const types = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'];


//Starts a new game on load. Used to prevent playerPoints array bug. 
window.onload = () => {
    initGame()
};

let playerPoints = [];
// let pcPoints = [];
const   btnGet = document.querySelector('#btnGet'),
        btnStop = document.querySelector('#btnStop'),
        btnGame = document.querySelector('#btnGame');

const   smallTag = document.querySelectorAll('small'), 
        divPlayersCards = document.querySelectorAll('.divCards')

deck = createDeck(types, specials);


//Initialize the game
const initGame = (numPlayers = 2) => {
    // deck = createDeck(types, specials);

    playerPoints = [];
    // pcPoints = [];
    for(let i=0; i < numPlayers; i++){
        playerPoints.push(0);
    }
    
    smallTag.forEach(elem => elem.innerText = 0)
    divPlayersCards.forEach(e => e.innerHTML = '')
    btnGet.disabled = false;
    btnStop.disabled = false;
}


const chooseWinner = () => {

    const [minimunPoints, pointsPC] = playerPoints;

    setTimeout(() => {
        if(pointsPC === playerPoints){
            alert('Its a Tie :(');
        }else if(minimunPoints > 21){
            alert('PC Wins :D');
        }else if(pointsPC > 21){
            alert('Player wins');
        }
    }, 20)
}



//                  Events

btnGet.addEventListener('click', () => {
    let turn = 0;
    const card = getCard(deck);

    let points = getPoints(0, card, playerPoints)

    // divPlayersCards[turn].append(createCard(turn, card))
    createCard(turn, card)
    if(points > 21){
        // alert('You Lose!')
        btnGet.disabled = true;
        btnStop.disabled = true; 
        pcTurn(points, deck);
    } 
    else if(points === 21){
        // alert('You got 21, you win!!')
        btnGet.disabled = true;
        btnStop.disabled = true; 
        pcTurn(playerPoints, deck);
    }
});

btnStop.addEventListener('click', () => {
    btnGet.disabled = true;
    btnStop.disabled = true; 
    // console.log(playerPoints[0])

    pcTurn(playerPoints[0], deck, divPlayersCards[0]);
});


btnGame.addEventListener('click', () => {
    initGame();
});

// return {
//     newGame: initGame
// };