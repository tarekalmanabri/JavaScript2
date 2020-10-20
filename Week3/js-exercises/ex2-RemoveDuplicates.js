/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE

function removeDuplicates(array) {
    const uniqueItems = []
    const removedItems = []

    for (let i = 0; i <= array.length; i++) {
        const item = array[i]

        if (uniqueItems.includes(item)) {
            removedItems.push(i);
            continue;
        }
        uniqueItems.push(item);
    }

    removedItems.forEach((item, index) => {
        array.splice(item - index, 1);
    });

}
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);

console.log(letters);

if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
    console.log("Hooray")