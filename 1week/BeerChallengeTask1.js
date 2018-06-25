
/**
 * The function generates the unidirected linked list based on array given.
 * Single linked list element stores has two fields. The first one stores 
 * the value of the element and the latter stores the reference to the next
 * element on the list.
 * @param {Array} theArray,  input for building the linked list
 * @returns {Array}, an Array of linked list elements if successfuly built. 
 * null otherwise.
 */
let arrayToList = function (theArray) {

  let list = [];

  if (theArray.size == 0) {
    return null;
  }

  list[0] = {
    value: theArray[0],
    rest: null
  }

  for (let i = 1; i < theArray.length; i++) {

    list[i] = {
      value: theArray[i],
      rest: null
    }

    list[i - 1].rest = list[i];

  }

  return list[0];
}

/**
 * The function generates the Array based on linked list provided.
 * @param {*} theListElement , The list element that will the forst element in the array
 * @returns, the first element of the lsit 
 */
let listToArray = function (theListElement) {

  if (theListElement == null) {
    return null;
  }

  let resultArray = [];
  let i = 0;

  do {
    resultArray[i] = theListElement.value;
    theListElement = theListElement.rest;
    i++;
  } while (theListElement != null)


  return resultArray;
}

/**
 * Adds new element at begining of linked list (list)
 * @param {number} value , new element to be added
 * @param {Array} list , list to be added to.
 * @return new list element (new first one actually)
 */
let prepend = function (value, list) {
  newElement = {
    value: value,
    rest: list,
  }
  return newElement;
}

/**
 * The function returns the element on the list pointed by number parameter
 * @param {*} list , list to be searched
 * @param {*} number , the position of the element to be found
 * @returns {number}, value of the element pointed or null if not found.
 */
let nth = function (list, number) {
  if (list == null || number == null) {
    return null
  }

  let i = 0;
  let listElement = list;

  while (i != number) {
    i++;
    listElement = listElement.rest;

    if (listElement == null) {
      return null;
    }
  }

  return listElement.value
}

/*====== Testing part ===== */
/*listArray = arrayToList([1, 2, 3, 4]);
console.log(listArray);

array = listToArray(listArray);
console.log(array);
*/

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20