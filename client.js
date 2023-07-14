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
const $myLi = $('<li>').text('five with jQuery');

// find something in the DOM that already exists
const $mainList = $('#main-list');

// add the newly created li to the main-list
$mainList.append($myLi);

$hello = $(`
    <div>
       <h2> Hello </h2>
    </div>
`);

$mainList.append($hello);

//
// On button click, retrieve the value from the input and create a new li
//

// grab the button from the DOM
const $button = $('#add-button');

// add a click listener to the button
$button.on('click', () => {
  console.log('button got clicked');

  // get the input field
  const $input = $('#new-number');

  // get the value from the input field
  const inputContents = $input.val();
    
  // create a new li with the input contents
  const newLi = $(`<li>${inputContents}</li>`);

  // add the new li to the main-list
  $mainList.prepend(newLi);

  // clear the input field and set focus
  $input.val('').focus();
  // $input.focus();
});

