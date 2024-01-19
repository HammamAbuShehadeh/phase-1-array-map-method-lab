const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((tutorialLine) => {
    const words = tutorialLine.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const tutorialLineNew = capitalizedWords.join(" ");
    return tutorialLineNew;
  });
};

titleCased(tutorials);

/*
const titleCased = () => {
  // console.log(tutorials);
  // const tutorialsCall = tutorials.map((tutorial) => {
  return  tutorials.map((tutorial) => {
    const words = tutorial.split(" ");
    console.log(words);
    let tutorialNew =[]
    const wordsCall = words.map((word) => {
      const capitalizedWords = word.charAt(0).toUpperCase() + word.slice(1);
      console.log(capitalizedWords);
      //  words = words.push(capitalizedWords)
      tutorialNew.push(capitalizedWords)

    //  return capitalizedWords
    tutorialNew.join(" ")
    });
    //  const wordsNew = capitalizedWords.join(" ")
    //    console.log(words);
    //    return wordsNew
    
return tutorialNew
  });
  // return tutorials;
};

titleCased(tutorials);
*/

// const titleCased = (tutorialNames) => {
//   return tutorialNames.map((title) => {
//     const words = title.split(' ');
//     const capitalizedWords = words.map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(' ');
//   });
// };

// titleCased(tutorials)
// console.log(titleCased(tutorials));

// const outer = (array) => {
//   for (let i = 0; i <= array.length - 1; i++) {
//     // console.log(array[i]);
//     let words = array[i].split(" ");
//     // console.log(words);
//     const capitalizedWords = words.map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1);})
//       return capitalizedWords.join(' ');

//     /*
//     for (let j = 0; j <= words.length - 1; j++) {
//       let letters = words[j].split("");
//       // console.log(letters);
//       // letters[0]=letters[0].toUpperCase()
//       let modifideLetters = letters.map(function (el, index) {
//         if (index === 0) {
//           console.log(el);
//           el = el.toUpperCase();
//           console.log(el);

//           // }else {
//           //   return el
//         }
//         return el;
//       });

//       // console.log(letters[0]);
//       // console.log(letters.join(""));
//       // letters = letters.join("");
//       letters = modifideLetters.join("");
//       console.log(modifideLetters);
//       console.log(letters);
//       // let modifideWords = letters.push()
//       // words= letters.join("")
//       // return letters;
//     }
//     */
//     // let modifideWords = letters.join("")
//     // console.log(modifideWords);
//     // words = letters.join("");
//     // console.log(words);
//   }

//   words = capitalizedWords
//   console.log(words);
//   return words
//   // console.log(array);

//   // return array;
// };
// outer(tutorials);
