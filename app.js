$(document).ready(function(){

	var textCounter = 160;

	$("#text_counter").text(textCounter);


	$("#textarea").keyup(function(){

		var textChar = $("#textarea").val().length;
		var ramainingChar = textCounter - textChar;

		$("#text_counter").text(ramainingChar).addClass("green").re;


		if (ramainingChar<0) {
			$("#text_counter").addClass("red").removeClass("green");
		}
		else{
			$("#text_counter").addClass("green").removeClass("red");
		}
	});
});