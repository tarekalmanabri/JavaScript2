/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function() {
    a = 12;
    return function() {
        alert(a);
    };
})();

x();

// it returns 12 because <let a> is reidentified in the first function so the alert goes back to the first outer function and finds it.