/* jshint esversion: 6 */

// donation button feature
let timesClicked = 0;
let likes = 9;


function makeElems(id, type, content, append) {
  var newElement = document.createElement(type);
  newElement.id = id;
  newElement.innerHTML = content;
  append.appendChild(newElement);
}

makeElems('donate', 'div', '0', main);
makeElems('incAmount', 'button', '+', main);
makeElems('decAmount', 'button', '-', main);


document.querySelector('#incAmount').addEventListener('click', increment);
document.querySelector('#decAmount').addEventListener('click', decrement);

function increment(){
  timesClicked++;
  document.querySelector('#donate').innerHTML = timesClicked;
  return true;
}

function decrement(){
  if (timesClicked <= 0) {
    return 0;
  } else {
    timesClicked--;
    document.querySelector('#donate').innerHTML = timesClicked;
    return true;
  }
}



// heart button
makeElems('heartCount', 'p', likes, main);
makeElems('heartButton', 'p', '♥', main);

document.querySelector('#heartButton').addEventListener('click', like);

function like(){
  likes++;
  document.querySelector('#heartCount').innerHTML = likes;
  return likes;
}




