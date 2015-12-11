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
     link[0]="Cocktail_s/Cocktail_Brandy_BetweenTheSheets.html";
     link[1]="Cocktail_s/Cocktail_Brandy_BrandyAlexander.html";
     link[2]="Cocktail_s/Cocktail_Brandy_BrandyDaisy.html";   
     link[3]="Cocktail_s/Cocktail_Brandy_CorpseReviver.html";
     link[4]="Cocktail_s/Cocktail_Brandy_Eggnog.html";
  
   window.location = (link[wLink]);
}


