/**
 * returns true when the given function returns true for every element in the array
 * version with for loop
 * @param {Array} array 
 * @param {function} predicateF 
 */
let every = function (array, predicateF) {

    for (let element of array) {
        if (!predicateF(element)) {
            return false;
        }
    }
    return true;
}
/**
 * returns true when the given function returns true for every element in the array
 * version some function
 * @param {Array} array 
 * @param {function} predicateF 
 */
let everyWithSome = function (array, predicateF) {
    return !array.some(element => !predicateF(element));
}

/*============================Testing part==================================*/

console.log(every([1, 3, 5], n => n < 10));
console.log(everyWithSome([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
console.log(everyWithSome([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
console.log(everyWithSome([], n => n < 10));
// → true