import {getCardValue} from './index'
/**
 * 
 * @param {*} turn Current turn Player or PC
 * @param {*} card New card value.
 * @returns Total points of player (or PC).
 */
export const getPoints = (turn, card, playerPoints) => {
    
    const smallTag = document.querySelectorAll('small'); 

    if(Array.isArray(playerPoints))
    {
        playerPoints[turn] = playerPoints[turn] + getCardValue(card);
        smallTag[turn].innerText = playerPoints[turn];
        return playerPoints[turn];
    }
    else
    {
        let points = 0;
        points = playerPoints + getCardValue(card);
        smallTag[turn].innerText = points;
        return points;
    }

    
}