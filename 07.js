// #7 Class
// https://gist.github.com/mul14/1de7163a63efce2112a9510a7ba92383#file-07-md
// Preparation
let input1 = 'MAKAN';
let input2 = 'malam';
let input3 = 'saya ingin makan';
let input4 = 'kasur';

let input5arg1 = 'Saya ingin makan sate';
let input5arg2_1 = 'makan';
let input5arg2_2 = 'rujak';
let input5arg2_3 = ['makan','rujak'];

let input6_2 = 6;
let input6_3 = 32;

let input7 = 'Kotlin & Swift semakin populer di 2018?';

// Solution
class Str {

    static lower(input) {
        return input.toLowerCase();
    }

    static upper(input) {
        return input.toUpperCase();
    }

    static capitalize(input) {
        let result = input
            .split(' ')
            .map(word => {
                return word
                    .charAt(0)
                    .toUpperCase() + word.slice(1);
            })
            .join(' ');
        return result;
    }

    static reverse(input) {
        return input
            .split('')
            .reverse()
            .join('');
    }

    static contains(input, test) {

        let result;

        if (typeof test === 'object') {
            let hasTrueTest = false;
            // if test is array, loop each test
            test.forEach(element => {
                let regex = RegExp(element);
                result = regex.test(input);
                // flag ada test yang true
                if (result === true) 
                    hasTrueTest = true;
                }
            )
            // result = true, kalo ada test yang true
            if (hasTrueTest === true) 
                result = true;
            }
        else {
            let regex = RegExp(test);
            result = regex.test(input);
        }

        return result;

    }

    static random(num) {
        // Default length
        if (typeof num === 'undefined') 
            num = 16;
        
        let result = '';
        let set = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < num; i++) {
            result += set.charAt(Math.floor(Math.random() * set.length)); // Append random char from set
        }
        return result;
    }

    static slug(input) {
        // Get rid of symbols, lowercase, split word, eliminate empty word
        let symbolRegex = /([^a-zA-Z0-9\s])+/g;
        let result = input
            .replace(symbolRegex, "")
            .toLowerCase()
            .split(' ')
            .filter(word => word.length > 0)
            .join('-');
        return result;
    }

}




// Execution & Assertion

// 1
console.log("> Lower")
console.log("Input: "+input1)
console.log("Output: "+Str.lower(input1));
console.log();

// 2
console.log("> Upper")
console.log("Input: "+input2)
console.log("Output: "+Str.upper(input2));
console.log();

// 3
console.log("> Capitalize")
console.log("Input: "+input3)
console.log("Output: "+Str.capitalize(input3));
console.log();
// 4
console.log("> Reverse")
console.log("Input: "+input4)
console.log("Output: "+Str.reverse(input4));
console.log();
// 5
console.log("> Contains")
console.log("Input : "+input5arg1)
console.log("Test 1: "+input5arg2_1)
console.log("Output: "+Str.contains(input5arg1,input5arg2_1));
console.log("Test 2: "+input5arg2_2)
console.log("Output: "+Str.contains(input5arg1,input5arg2_2));
console.log("Test 3: "+input5arg2_3)
console.log("Output: "+Str.contains(input5arg1,input5arg2_3));
console.log();

// 6
console.log("> Random")
console.log("No parameter")
console.log("Output: "+Str.random());
console.log("Parameter: "+input6_2);
console.log("Output: "+Str.random(input6_2));
console.log("Parameter: "+input6_3);
console.log("Output: "+Str.random(input6_3));
console.log();

// 7
console.log("> Slug")
console.log("Input: "+input7)
console.log("Output: "+Str.slug(input7));
console.log();