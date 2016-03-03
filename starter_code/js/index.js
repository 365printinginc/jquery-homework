//Implement the red light using jQuery. Don't forget to add the script tags.

$("#stop-button").click(illuminatedRed);
$("#slow-button").click(illuminatedYellow);
$("#go-button").click(illuminatedGreen);

function illuminatedRed() {
	clearLights();
	$("#stop-light").css("background-color", "red");
}

function illuminatedYellow() {
	clearLights();
	$("#slow-light").css("background-color", "yellow");
}

function illuminatedGreen() {
	clearLights();
	$("#go-light").css("background-color", "green");
}

function clearLights() {
	$(".bulb").css("background-color", "black");
}

