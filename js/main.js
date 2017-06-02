document.addEventListener("DOMContentLoaded", () => {

$('video').mediaelementplayer({
       features: ['playpause','progress','fullscreen','volume'],
       startLanguage: 'en',
       stretching: 'responsive'
     });



  var vidi = document.getElementById("video");
  var startingTime = [0, 4.130, 7.535, 11.270];

  vidi.addEventListener('timeupdate', function(){
    for (var i = 0; i < startingTime.length; i++) {
      const timer = startingTime[i]
      const curTime = vidi.currentTime;
      if (timer <= curTime) {
        console.log('it works');
        } else {
          console.log('this works too');
        }
      }
    }
  );


});



/*
const vidi = document.getElementById("video");
const span1 = document.querySelector('#c0');
const span2 = document.querySelector('#c1');
const span3 = document.querySelector('#c2');
const span4 = document.querySelector('#c3');

function blacken() {
    span1.style.color = 'black';
    span2.style.color = 'black';
    span3.style.color = 'black';
    span4.style.color = 'black';
  }

query selector attr
vidi.addEventListener('timeupdate', function(){
  const curTime = vidi.currentTime;
  if (curTime > 0 && curTime < 4.12 ) {
    span1.style.color = '#ffba0a';
  }
  else if (curTime > 4.12 && curTime < 7.53) {
    blacken();
    span2.style.color = '#ffba0a';
  }
  else if (curTime > 7.53 && curTime < 11.27) {
    blacken();
    span3.style.color = '#ffba0a';
  }
  else if (curTime > 11.27 && curTime < 13.96) {
    blacken();
    span4.style.color = '#ffba0a';
  }
  });
*/
