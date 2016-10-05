function randomizeCasesHeader(){
  console.log('randomizeCasesHeader init');
  var colorsArray = ['#4d78f8'];

  var activeColorId = getRandomInt(1, colorsArray.length);
  var activeColor = colorsArray[activeColorId-1];

  if (document.querySelectorAll('section.inner-banner.cases').length > 0){
    document.querySelector('section.inner-banner.cases').style.background = activeColor;    
  }

  var carrets = document.querySelectorAll('.fa.fa-caret-right');
  for (var i = 0; i < carrets.length; i++){
    carrets[i].style.color = activeColor;
  }
  console.log('randomizeCasesHeader end');
}

function iphoneParallax(){
  $('.screen').each(function(){
    var $obj = $(this);
   
    $(window).scroll(function() {
      var yPos = -($(window).scrollTop() / ($obj.data('speed') * 10));
      var imgPos = yPos + 'px';
      if (yPos < -82){ imgPos = -82; }

      $obj.css('top', imgPos);
    }); 
  });
}
