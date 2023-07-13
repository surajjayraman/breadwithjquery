$(document).ready(() => {

  console.log('Hello World');

  // using vanilla js
  // create a new li
  const myLi = document.createElement('li');
  // create a text node for the li
  const textNode = document.createTextNode('Four');
  myLi.append(textNode);
  const mainList = document.getElementById('main-list');
  mainList.append(myLi);
});
