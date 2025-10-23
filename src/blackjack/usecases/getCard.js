
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} Takes a card from the deck and returns it. 
 */
export const getCard = (deck) => {

    if(!deck || deck.length === 0){
        throw 'There is no more cards on deck';
    };

    return deck.pop();
}