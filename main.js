$( document ).ready(function() {

	document.onkeydown = function(e) {
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		$(".container").css("background-color", "#" + randomColor);
	    switch(e.which) {
	        case 37:
	        console.log("left")
	        $(".centered-text").text("Tracked character");
	        $(".centered-text").append("<p class='new'>←</p>");
	        break;

	        case 38:
	        console.log("up")
	        $(".centered-text").text("Tracked character");
	        $(".centered-text").append("<p class='new'>↑</p>");
	        break;

	        case 39:
	        console.log("right")
	        $(".centered-text").text("Tracked character");
	        $(".centered-text").append("<p class='new'>→</p>");
	        break;

	        case 40:
	        console.log("down")
	        $(".centered-text").text("Tracked character");
	        $(".centered-text").append("<p class='new'>↓</p>");
	        break;

	        case 13:
	        $(".centered-text").text("Tracked character");
	        $(".centered-text").append("<p class='new'>Enter</p>");
	        alert("You have pressed the enter key");
	        break;

	        default: $(".centered-text").text("Untracked character");
			$(".centered-text").append("<p class='new'>" + String.fromCharCode( e.which ) + "</p>");
    	}
    e.preventDefault(); // prevent the default action (scroll / move caret)
	};

});