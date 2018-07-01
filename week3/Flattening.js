let flatenArray = function(array){
return array.reduce((flatenArray, element) => flatenArray.concat(element), []);
}

//======Testing part========/
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatenArray(arrays));
// → [1, 2, 3, 4, 5, 6]