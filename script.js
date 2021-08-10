var css = document.querySelector("h3");
var color1 = document.querySelector(".cL1");
var color2 = document.querySelector(".cL2");
var body = document.getElementById("Background");

function setCustomGradientColor()
{
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setCustomGradientColor);

color2.addEventListener("input", setCustomGradientColor);