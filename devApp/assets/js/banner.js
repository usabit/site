function randomizeBanner(){
  console.log("randomizeBanner init");

  var colorsArray = ["#f9615b"];  

  var activeColorId = getRandomInt(1, colorsArray.length);
  var activeColor = colorsArray[activeColorId-1];

  document.querySelector('section.banner').style.background = activeColor;
  var carrets = document.querySelectorAll('.fa.fa-caret-right');
  for (var i = 0; i < carrets.length; i++){
    carrets[i].style.color = activeColor;
  }

  imgSrc = "assets/img/tela-iphone-0" + activeColorId + ".png"

  if(window.location.href.indexOf("/en") > -1) {
     imgSrc = '../' + imgSrc;
  }

  document.querySelector('.iphone-screen img').src = imgSrc;

  console.log("randomizeBanner end");
}