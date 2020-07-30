let clickArrowLeft = currentMonthIndex => --currentMonthIndex === -1 ? 11 : currentMonthIndex;
let clickArrowRight = currentMonthIndex => ++currentMonthIndex === 12 ? 0 : currentMonthIndex;

let getEpoch = (date, month, year) => {
    let x = new Date(Date.now());
    x.setUTCFullYear(year, month, date);
    x.setUTCHours(0, 0, 0, 0);
    return x.getTime();
}

let destructureEpoch = epoch => {
    let x = new Date(epoch);
    return { date: x.getUTCDate(), month: x.getUTCMonth(), year: x.getUTCFullYear() };
}

module.exports = {
    clickArrowLeft,
    clickArrowRight,
    getEpoch,
    destructureEpoch,
};