var randomVariable=Math.floor(Math.random()*6)+1;
var randomdiceImage="images/dice"+randomVariable+".png";
var randomVariable1=Math.floor(Math.random()*6)+1;
var randomdiceImage1="images/dice"+randomVariable1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceImage);
document.querySelectorAll("img")[1].setAttribute("src",randomdiceImage1);
if(randomVariable>randomVariable1){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomVariable<randomVariable1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
document.querySelector("h1").innerHTML="Draw";
}