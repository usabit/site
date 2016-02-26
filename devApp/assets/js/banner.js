var colorsArray = ["#f9615b"];

var activeColorId = getRandomInt(1, colorsArray.length);
var activeColor = colorsArray[activeColorId-1];

console.log(activeColorId, activeColor);

// var sectionBanner = document.querySelector('section.banner').style.background = activeColor;
document.querySelector('section.banner').style.background = activeColor;
document.querySelector('.iphone-screen img').src = "assets/img/tela-iphone-0" + activeColorId + ".png";