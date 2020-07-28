let clickArrowLeft = currentMonthIndex => --currentMonthIndex === -1 ? 11 : currentMonthIndex; 
let clickArrowRight = currentMonthIndex => ++currentMonthIndex === 12 ? 0 : currentMonthIndex;

module.exports = {
    clickArrowLeft,
    clickArrowRight,
};