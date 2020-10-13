/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
    // your code goes in here
    const ul = document.createElement('ul');
    arr.forEach((text) => {
        const listItem = document.createElement('li');
        listItem.innerText = text;
        ul.appendChild(listItem);
    });

    return ul;
}

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
];

document.getElementById('hobbies-list').appendChild(createHTMLList(myHobbies));