//Implement the red light using jQuery. Don't forget to add the script tags.
 $(document).ready(pageReady);
    function pageReady() { 
        $("#readless1").hide();
        $("#section1 p").hide();   
        $("#readless2").hide();
        $("#section2 p").hide();
        $("#sidebar2 p").hide();
    }

  $("#readmore1").click(handleClick);
    function handleClick() {
        event.preventDefault();
     	}

  $("#readmore2").click(handleClick);
    function handleClick() {
        event.preventDefault();
     	}

  $("#readless1").click(handleClick);
    function handleClick() {
        event.preventDefault();
     	}

  $("#readless2").click(handleClick);
    function handleClick() {
        event.preventDefault();
     	}

  $("#learnmore").click(handleClick);
    function handleClick() {
        event.preventDefault();
     	}


$("#readmore1").click(readMore1SlideDown);
$("#readmore2").click(readMore2SlideDown);
$("#readless1").click(readLess1SlideUp);
$("#readless2").click(readLess2SlideUp);
$("#learnmore").click(learnMoreSlideDown);

function readMore1SlideDown() {
	$("#section1 p").slideDown("slow");
	$("#readless1").show();
	$("#readmore1").hide();
}

function readMore2SlideDown() {
	$("#section2 p").slideDown("slow");
	$("#readless2").show();
	$("#readmore2").hide();
}

function readLess1SlideUp() {
	$("#section1 p").slideUp("slow");
	$("#readless1").hide();
	$("#readmore1").show();
}

function readLess2SlideUp() {
	$("#section2 p").slideUp("slow");
	$("#readless2").hide();
	$("#readmore2").show();
}

function learnMoreSlideDown() {
	$("#sidebar2 p").slideDown("slow");
	$("#learnmore").hide();
}