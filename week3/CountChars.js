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

    let getLanguageNameWithSignCount = function (script) {
        let result = [];
            result = script.map(
              (element) => {return {
            name: element.name,
            signCount:  element.ranges.reduce((count, range) => count + range[1] - range[0], 0)
              };
            }
          );
        
        return result;
    }

   console.log(getLanguageNameWithSignCount(SCRIPTS));
 // console.log(SCRIPTS[2].ranges.reduce((count, range) => count + range[1] - range[0], 0));
