// function translate(str) {
//     str = str.toLowerCase();
//     var n = str.search(/[aeiuo]/);
//     switch (n) {
//         case 0:
//             str = str + "way";
//             break;
//         case -1:
//             str = str + "ay";
//             break;
//         default:
//             str = str.substr(n) + str.substr(0, n) + "ay";
//             str = str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1way");
//             break;
//     }
//     return str;

// }
function translate(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
        // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;

    if (vowels.includes(str[0])) {
        // If first letter is a vowel
        return str + "way";
    } else {
        // If the first letter isn't a vowel i.e is a consonant
        for (let char of str) {
            // Loop through until the first vowel is found
            if (vowels.includes(char)) {
                // Store the index at which the first vowel exists
                vowelIndex = str.indexOf(char);
                break;
            }
        }
        // Compose final string
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
}

console.log(translate("splendid"));
const translator = module.exports = translate