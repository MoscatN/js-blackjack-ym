import _ from 'underscore';


/**
 * 
 * @param {Array<String>} types Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} specials Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} returns a new deck.
 */
export const createDeck = (types, specials) => {
    let deck = []
    
    for(let i = 2; i <= 10; i++){
        for(let type of types){
            deck.push(i + type)
        }
    }

    for(let type of types){
        for(let spc of specials){
            deck.push(spc + type)
        }
    }

    return  _.shuffle(deck);
};
