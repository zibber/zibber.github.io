/*var color = [red,blue,yellow,green,green,orange,gray];

$("h1").html(words[Math.floor(Math.random()* words.length)]);

$("h1").each(function() {
    $(this).html(words[Math.floor(Math.random()* words.length)]);
});

var topPosition = Math.floor(Math.random()*500) + "px";
var leftPosition = Math.floor(Math.random()*500) + "px";

$(".dot").css("top",topPosition).css("left",leftPosition).css("width",topPosition).css("height",leftPosition);


for(var increment = 0; increment < 100; increment++) {
    $("body").append("<div class= 'dot'></div>");

}

$(".dot").each(function() {
    var topPosition = Math.floor(Math.random()*500) + "px";
var leftPosition = Math.floor(Math.random()*500) + "px";

$(this).css("top",topPosition).css("left",leftPosition).css("width",topPosition).css("height",leftPosition)
})
*/

var color = ["red","blue","yellow","green","orange","gray"];

//color[Math.floor(Math.random()*color.length)];

//$( "#a101" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 $( "#a101" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 $( "#a102" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 $( "#a103" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 $( "#a201" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 $( "#a202" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 $( "#a203" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 $( "#a301" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 $( "#a302" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 $( "#a303" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
 
 

     
$( ".action" ).mouseenter(function() {
    $( this ).css("opacity","0.3");
    console.log("its working");
});



$( ".action" ).mouseleave(function() {
    $( this ).css("opacity","0");
    console.log("its working02");
});

$( ".action" ).mousedown(function() {
    $( this ).css("opacity","0.9");
    console.log("its working03");
    
        var element = document.getElementById("html");
var chars = '0123456789ABCDEF'.split('');

var randomColor2 = function () {
    var color2 = '#';
    
    for (var i = 0; i < 6; i++)
        color2 += chars[Math.floor(Math.random() * 16)];
        
    return color2;
};

setInterval(function () {
    element.style.background = randomColor2();
}, 1500);
    
    
});


$( "#a1" ).mouseup(function() {
    $( "#a101" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a201" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a301" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    
    $( this ).css("opacity","0.5");
    console.log("its working04");
});

$( "#a2" ).mouseup(function() {
    $( "#a102" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a202" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a302" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    
    $( this ).css("opacity","0.5");
    console.log("its working04");
});

$( "#a3" ).mouseup(function() {
    $( "#a103" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a203" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a303" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    
    $( this ).css("opacity","0.5");
    console.log("its working04");
});

$( "#a4" ).mouseup(function() {
    $( "#a101" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a102" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a103" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    
    $( this ).css("opacity","0.5");
    console.log("its working04");
});

$( "#a5" ).mouseup(function() {
    $( "#a201" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a202" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a203" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    
    $( this ).css("opacity","0.5");
    console.log("its working04");
});

$( "#a6" ).mouseup(function() {
    $( "#a301" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a302" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    $( "#a303" ).css("background-color",color[Math.floor(Math.random()*color.length)]);
    
    $( this ).css("opacity","0.5");
    console.log("its working04");
});



