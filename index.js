// return the longest word in a string.
// first use split method to get each word of string
// split(" ")
// assign an empty variable
// loop through each words' length 
// if each word length is bigger than the the empty variable
// assign the variable to that word
// it loops through each word
// until find the longest word by checking the length of each word
function longestWords(str){
    let eachWord = str.split(" ");
    let longestWord = "";
    for(let i = 0; i < eachWord.length; i++){
     if(eachWord[i].length > longestWord.length) {
        longestWord = eachWord[i];
     }
    }
    return longestWord;
}

console.log(longestWords("JavaScript learning is like being lost in a desert"));