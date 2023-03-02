function sortArray(array, orderToSort) {

    return orderToSort === 'asc' ? array.sort((a, b) => (a - b)) : array.sort((a, b) => (b - a));

}
module.exports = sortArray;
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));