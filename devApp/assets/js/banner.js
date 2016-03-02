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

  document.querySelector('.iphone-screen img').src = "assets/img/tela-iphone-0" + activeColorId + ".png";

  console.log("randomizeBanner end");
}