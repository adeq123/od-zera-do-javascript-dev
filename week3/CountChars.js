var SCRIPTS = [
  {
    name: "Adlam",
    ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
  },
  {
    name: "Caucasian Albanian",
    ranges: [[66864, 66916], [66927, 66928]],
    direction: "ltr",
    year: 420,
    living: false,
    link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
  },
  {
    name: "Ahom",
    ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
  },]

/**
 * Returns a list of language name and number of chars used in the language
 * @param {*} script , language DB
 */
let getLanguageNameWithSignCount = function (script) {
  return script.map(
    (element) => {
      return {
        name: element.name,
        signCount: element.ranges.reduce((count, range) => count + range[1] - range[0], 0)
      };
    }
  );
}

/**
 * Average creation year for living and dead scripts
 * @param {*} scripts
 * @return {Array} First element of the array is average living language creation date. The second element 
 * is average dead language creation date
 */
let averageCreationDate = function (scripts) {
  //let aveCreationDateLiving = scripts.reduce((count, script) => script.living ? count + script.year : livingCount, 0);
  let aveCreationDateLiving = 0
  let aveCreationDateDead = 0;
  let numOfLiving = 0;

  scripts.forEach(element => {
    if (element.living) {
      aveCreationDateLiving += element.year;
      numOfLiving++;
    } else {
      aveCreationDateDead += element.year;
    }
  });

  return [aveCreationDateLiving / numOfLiving, aveCreationDateDead / (scripts.length - numOfLiving)];

}

//console.log(getLanguageNameWithSignCount(SCRIPTS));
// console.log(SCRIPTS[2].ranges.reduce((count, range) => count + range[1] - range[0], 0));
console.log(averageCreationDate(SCRIPTS));