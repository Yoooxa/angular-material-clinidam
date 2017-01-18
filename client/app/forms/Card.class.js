/**
 * Created by arthur on 18/01/2017.
 */
class Card{

    constructor() {
        this.cardNumber = 1;
    }

    logDebug() {
        console.log(this);
    }

    setPreviousCardNumber() {
        this.cardNumber --;
    }

    setNextCardNumber() {
        this.cardNumber ++;
    }
}