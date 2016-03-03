function getPartnersColors(){
  console.log("getPartnersColors init");

  var activeColor = '#111';

  var carrets = document.querySelectorAll('.fa.fa-caret-right');
  for (var i = 0; i < carrets.length; i++){
    carrets[i].style.color = activeColor;
  }

  console.log("getPartnersColors end");
}