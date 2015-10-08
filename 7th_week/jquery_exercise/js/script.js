/*

Instructions:

---- PART 1 ----
Start by removing that pirate flag (#pirate).

Next, add a gradient to the whole page by applying the "gradient" class to the body.

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "Start" button:

When the user clicks the "Start" button, change the text of "status" to read "GO". 
Let's also change the background color of "status" to green.
Change the text of the "Start" button to read "Stop".

When the user clicks the button again, revert all of the above. 
So "status" should read "STOP", it's background color should be red, and the button itself should read "Start" again.

Hint: you will want to store the current state of the button in a variable.

---- PART 3 ----
Now that we have stored the status of our button, let's show the user an image if the mouse over our green "GO" box.

If the user has activated the button, toggle the visibility of id "cat" to reveal our animated leopard.

*/

// part 1
$("#pirate").hide();

$("body").addClass("gradient");

// part 2

$("#toggle").click(function() {
    if ($("#toggle").html() == "Start") {
   $("#status").html("GO");
   $("#status").css("background-color","green") ;
   $("#toggle").html("Stop");
   $("#status").mouseenter(function() {
       $("#cat").show();
     });
   $("#status").mouseleave(function() {
       $("#cat").hide();
     });
     confirm("YOU MAKE IT!");
   prompt("Please grade here");
    } else {
   $("#status").html("STOP");
   $("#status").css("background-color","red");
   $("#toggle").html("Start");
   $("#cat").hide();
    }
    
});


/* var img = new Image();
var div = document.getElementById('foo');

img.onload = function() {
  div.appendChild(img);
}; */

var img = 'img/pirate.gif';




/*$("#toggle").click(function() {
    if ($("#toggle").html() == "Start") {
   $("#status").html("GO");
   $("#status").css("background-color","green") ;
   $("#toggle").html("Stop");
   $("#status").mouseenter(function() {
       $("#cat").show();
   }
   $("#status").mouseleave(function() {
       $("#cat").hide();
   }
    } else {
   $("#status").html("STOP");
   $("#status").css("background-color","red");
   $("#toggle").html("Start");
});

*/

// part 3

/* $("#status").mouseenter(function() {
    if ($("#toggle").html() == "Start") {
   $("#cat").show();

   
});


// $("body").html("")





  /* confirm("YOU MAKE IT!");
   prompt("Please grade here") */






/* $("#toggle").click(function() {
    if ($("#toggle").html() == "Start") {
   $("#status").html("GO");
   $("#status").css("background-color","green") ;
   $("#toggle").html("Stop");
 }
});


/* $("#status").mouseover(function() {
  if ($("#status").css() == "background-color","green") {
   $("#status").addClass("#pirate")
  }
}

<img onmouseover="bigImg(this)" src="cat.gif" alt="Smiley">

$("body").addClass("#cat")

*/

/*the answer

var clickd = false;

$("#toggle").click(function() {
    if (click == false) {
    $("#status").html("GO");
    $("#status").css("background-color","green");
    $(this).html("Stop"); /* 'this' target the element the user using 
    console.log("You click the button...");
    clicked = true;
    } else { 
        $("#status").html("STOP");
        $("#status").css("background-color","red");
        $(this).html("GO");
        clicked = false
        
        
    }
    
});*/