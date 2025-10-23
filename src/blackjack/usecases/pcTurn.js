import {getCard, getPoints, createCard} from './index'



/**
 * 
 * @param {Number} minimunPoints Ammount of points achieved by the player. 
 * @param {*} deck Actual deck with the remaining cards.
 */
export const pcTurn = (minimunPoints, deck) => {
    if(!minimunPoints) throw new Error('Minimun Points are required.')
    if(!deck) throw new Error('Deck is required.')

    let pointsPC  = 0 ;
    do{
        const card = getCard(deck);
        pointsPC = getPoints(1, card, pointsPC)

        createCard(1, card);
        if(minimunPoints > 21){
            break;
        }
    }
    while((pointsPC < minimunPoints) && (pointsPC < 21) );

    // chooseWinner();
}