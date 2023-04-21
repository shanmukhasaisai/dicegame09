//jshint:6
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomimage = "dice" + randomnumber1 + ".png";
var randomsource = "images/" + randomimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomsource);
var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomimage2="dice"+randomnumber2+".png";
var randomsource1="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsource1);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent=("player 1 wins");
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").textContent=("player 2 wins");
}
else{
    document.querySelector("h1").textContent=("draw ");
}