/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);

const y = {
    x: 9
};

function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

// it outputs 9 because here only the variable is logged to the console, and the second output is {x:10} because the function is refering to the object and changing it.