console.log(`Hello ${username}`);

// using vanilla js
// create a new li
const myLi = document.createElement('li');
// create a text node for the li
const textNode = document.createTextNode('Four');
myLi.append(textNode);
const mainList = document.getElementById('main-list');
mainList.append(myLi);

console.log(jQuery);

// using jQuery
const $myLi = $('<li>Five</li>');

// find something in the DOM that already exists
const $mainList = $('#main-list');

// add the newly created li to the main-list
$mainList.append($myLi);

