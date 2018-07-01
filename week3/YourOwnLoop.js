let loop = function(start, testFunction, update, functionBody){
    for(let i = start; testFunction(i); i = update(i)){
        functionBody(i);
    }

}

/* =============Test part============== */

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1