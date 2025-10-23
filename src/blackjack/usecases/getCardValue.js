
/**
 * 
 * @param {String} card Example: AD 
 * @returns {Number} Returns the numeric value of given card.
 */
export const getCardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return (isNaN(value) ? 
        (value=== 'A' ? 11 : 10) 
        : value * 1);
}