/*
#6 Count words
Count each of these words: aku, ingin and dapat.
*/

// Preparation
let input ='Aku ingin begini\nAku ingin begitu\nIngin ini itu banyak sekali\n\nSemua semua semua\nDapat dikabulkan\nDapat dikabulkan\nDengan kantong ajaib\n\nAku ingin terbang bebas\nDi angkasa\nHei… baling baling bambu\n\nLa... la... la...\nAku sayang sekali\nDoraemon\n\nLa... la... la...\nAku sayang sekali'

// Algorithm
const solution = (input) => {
    let akuCounter = 0;
    let inginCounter = 0;
    let dapatCounter = 0;

    let akuRegex = /(aku)+/gi;
    akuCounter = input.match(akuRegex).length;

    let inginRegex = /(ingin)+/gi;
    inginCounter = input.match(inginRegex).length;

    let dapatRegex = /(dapat)+/gi;
    dapatCounter = input.match(dapatRegex).length;

    console.log("aku: "+akuCounter+" kali");
    console.log("ingin: "+inginCounter+" kali");
    console.log("dapat: "+dapatCounter+" kali");
}

// Execution
console.log(input+"\n")
solution(input)

// Assertion?