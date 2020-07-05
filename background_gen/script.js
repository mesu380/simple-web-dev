var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setgradient(){
    console.log(color2.value, color1.value);
    body.style.background="linear-gradient(to right," + color1.value + "," + color2.value + ")";
    document.getElementById("colortext").innerHTML = "background: linear-gradient(to right," + color1.value + "," + color2.value + ");";
}

color1.addEventListener("input" ,setgradient);

color2.addEventListener("input",setgradient);
