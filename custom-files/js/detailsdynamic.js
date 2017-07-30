const heart = document.getElementById('heart');

heart.addEventListener('click', function(e) {
  if(heart.style.color === 'red') {
    heart.style.color = 'black';
  } else {
    heart.style.color = 'red';
  }
});

const checkin = document.getElementById('checkin');

checkin.addEventListener('click', function(e) {
  console.log('COLOR', checkin.style.color);
  if (checkin.style.color === 'rgb(51, 204, 153)'){
    checkin.style.color = 'black';
  } else {
    checkin.style.color = 'rgb(51, 204, 153)';
  }
});

const share = document.getElementById('share');

share.addEventListener('click', function(e) {
  console.log('clicky click');
});

const donate = document.getElementById('donate');

donate.addEventListener('click', function(e) {
  console.log('clicky click');
});