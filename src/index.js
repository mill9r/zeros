module.exports = function getZerosCount(number) {
    div = 5;
    zeros_amount = 0;
    while (number >= div) {
        zeros_amount += Math.floor(number / div);
        div = div * 5;
    }
    return zeros_amount
}
