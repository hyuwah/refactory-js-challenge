// #2 Combine several arrays
// Combine all content inside this arrays into readable sentence.
// const first = ['Behind', 'every', 'great', 'man']
// const second = ['is', 'a', 'woman']
// const third = ['rolling', 'her', 'eyes']

// Preparation
const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

// Algorithm
const solution = (...sentences)=>{
    
    let readableSentence = '';
    sentences.forEach((sentence)=>{
        readableSentence += (sentence.join(' ') + " ");
    });
    return readableSentence;
}

// Execution
console.log("Input:")
console.log(first)
console.log(second)
console.log(third)
console.log("\nOutput:")
console.log(solution(first,second,third));
console.log()

//Assertion
solution(first,second,third).trim() == 'Behind every great man is a woman rolling her eyes'?
console.log('02.js test passed')
:
console.log('02.js test not passed');