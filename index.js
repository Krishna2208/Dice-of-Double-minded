
document.querySelector("button").addEventListener("click" , function(){
var randomNumber1 = Math.floor((Math.random()*6));
var randomNumber2 = Math.floor((Math.random()*6));
var image = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
 document.querySelector(".img1").setAttribute("src", image[randomNumber1]);
 document.querySelector(".img2").setAttribute("src", image[randomNumber2]);
 if(randomNumber1 > randomNumber2){
      document.querySelector("h3").innerHTML="🚩Go with thought-1!";
  }
  if(randomNumber1 < randomNumber2){
      document.querySelector("h3").innerHTML="stick with thought-2🚩";
  }
  if(randomNumber1 === randomNumber2){
      document.querySelector("h3").innerHTML="!Better do nothing!";
  }
});
