console.log("hello world");

$(".toTop").click(function() {
    console.log("hello world");
    $('html, body').scrollTop(0);
});


function get_random()
{
    var ranNum= Math.floor(Math.random()*5);
    return ranNum;
}

function gLink()
{
   var wLink=get_random();

    var link=new Array()
     link[0]="http://zibber.github.io/Cocktail_100/Cocktail_s/Cocktail_Brandy_BetweenTheSheets.html";
     link[1]="http://zibber.github.io/Cocktail_100/Cocktail_s/Cocktail_Brandy_BetweenTheSheets.html";
     link[2]="http://zibber.github.io/Cocktail_100/Cocktail_s/Cocktail_Brandy_BetweenTheSheets.html";   
     link[3]="http://zibber.github.io/Cocktail_100/Cocktail_s/Cocktail_Brandy_BetweenTheSheets.html";
     link[4]="http://zibber.github.io/Cocktail_100/Cocktail_s/Cocktail_Brandy_BetweenTheSheets.html";
  
   window.location = (link[wLink]);
}


