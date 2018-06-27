/**
 * The function makes a deep comparision of two parameteres (can be objects or primitive type)
 * @param {*} param1, First parameter to make comparison with
 * @param {*} param2, Secondparameter to make comparison with
 */
let deepEqual = function (param1, param2) {
    if (param1 == null || param2 == null) {
        return false;
    }

    if (typeof (param1) == "object" && typeof (param2) == "object") {
        //both parameters are object type - need deep comparison
        if (Object.keys(param1).length != Object.keys(param2).length) {
            // number of fields is the not same - return false
            return false;
        }
        for (let i = 0; i < Object.keys(param1).length; i++) {
            if (Object.keys(param1)[i] != Object.keys(param2)[i]) {
                 //if any of fields name is different - false
                return false;
            }
        }

        for (let i = 0; i < Object.values(param1).length; i++) {
            if (!deepEqual(Object.values(param1)[i], Object.values(param2)[i])) {
                 //if any of fields value is different - false
                return false;
            }
        }


    } else if (typeof (param1) == "object" || typeof (param2) == "object") {
        //one param is of type object the other is primitive type - return false
        return false;

    } else {
        return param1 == param2;
    }

return true;
}
/*==============Testing part======================*/

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true