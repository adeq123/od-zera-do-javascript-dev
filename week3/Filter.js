const fliter = function (array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }

    return passed;
}



const multiply = function (array, multi) {
    let newArray = [];
    for (let element of array) {
        newArray.push(element * multi);
    }
    return newArray;
}

let reduce = function (array, combine, start) {

    let result = start;
    for (let element of array) {
        result = combine(result, element);
    }
    return result;

}

let getLanguageNameWithSignCount = function (script) {
    let result = [];
    
        result = script.map(element => element.ranges.reduce(element => element[1] - element[0]));
    
    return result;
}

/*======== Testing part ======== */
let array = [...Array(5)].map((_e, i) => i)
array.reduce()
//console.log(fliter(array, element => (element % 3 == 0 && element % 5 == 0)));
//console.log(multiply(array, 2));
console.log(array);
console.log(reduce(array, (element1, element2) => element1 + element2, 0));
