document.addEventListener("DOMContentLoaded", () => {

$('video').mediaelementplayer({
       features: ['playpause','progress','fullscreen','volume'],
       startLanguage: 'en',
       stretching: 'responsive'
     });



  const vidi = document.getElementById("video");
  const startingTime = [
                        0.1, 4.130, 7.535, 11.270, 13.960, 17.940, 22.370, 26.880,
                        32.100, 34.730, 39.430, 42.350, 46.300, 49.270, 53.760, 57.780
                        ];
  const allSpan = document.querySelectorAll(".captions span");
  var index = 0;

  vidi.addEventListener('timeupdate', function(){
      if (startingTime[index] <= vidi.currentTime) {
          for (var i = 0; i < allSpan.length; i++) {
            allSpan[i].classList.remove('orange');
          }
          document.querySelector('#c' + index).classList.add('orange');
          index++;
      }
    });

    $(allSpan).click(function(e) {
       e.preventDefault();
       for (var i = 0; i < allSpan.length; i++) {
         allSpan[i].classList.remove('orange');
       }
       index = $(this).attr('data-info');
       vidi.currentTime = startingTime[index];
       allSpan[index].classList.add('orange');
       vidi.play();

     });

});



/*
allSpan.addEventListener('click', function() {
   thisdata = this.querySelectorAll("[data-info]")
   console.log(thisdata);
   /*for (let i = 0; i < startingTime.length; i++) {
     const timer = startingTime[i];
   } if (thisdata = i) {
      vidi.currentTime = timer;
   }
 );

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
