import _ from "underscore";


/**
 * 
 * @param {Array <String >} tiposDeCartas 
 * @param {Array <String >} tiposEspeciales 
 * @returns {Array<String>}retora una nueva deck de carta
 */

 export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
   
    if(! tiposDeCartas || tiposDeCartas.length === 0 )
    throw new error('tiposDeCartas es obligatorio como un arreglo de string'); 

    let deck = [];
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}