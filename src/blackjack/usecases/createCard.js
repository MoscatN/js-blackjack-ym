const divPlayersCards = document.querySelectorAll('.divCards')

/**
 * Given the name, adds a card in the view.. 
 * @param {Number} turn Current player's turn 
 * @param {String} card New card to be shown.
 */ 
export const createCard = ( turn, card ) => {
        if(turn === null) throw new Error('Turn is required.')

        const imgCard = document.createElement('img'); 
        imgCard.src = `assets/cartas/${card}.png`;
        imgCard.classList.add('carta'); 
        divPlayersCards[turn].append(imgCard);
}