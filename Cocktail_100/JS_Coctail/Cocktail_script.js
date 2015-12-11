console.log("hello world");

$(".toTop").click(function() {
    console.log("hello world");
    $('html, body').animate({ scrollTop: 0 }, 'fast');
});


function get_random()
{
    var ranNum= Math.floor(Math.random()*14);
    return ranNum;
}

function gLink()
{
   var wLink=get_random();

    var link=new Array()
     link[0]="Cocktail_s/Brandy/Cocktail_Brandy_BetweenTheSheets.html";
     link[1]="Cocktail_s/Brandy/Cocktail_Brandy_BrandyAlexander.html";
     link[2]="Cocktail_s/Brandy/Cocktail_Brandy_BrandyDaisy.html";   
     link[3]="Cocktail_s/Brandy/Cocktail_Brandy_CorpseReviver.html";
     link[4]="Cocktail_s/Brandy/Cocktail_Brandy_Eggnog.html";
     link[5]="Cocktail_s/Brandy/Cocktail_Brandy_HorsesNeck.html";
     link[6]="Cocktail_s/Brandy/Cocktail_Brandy_Metropolitan.html";
     link[7]="Cocktail_s/Brandy/Cocktail_Brandy_JackRose.html";
     link[8]="Cocktail_s/Brandy/Cocktail_Brandy_Sidecar.html";
     link[9]="Cocktail_s/Champagne/Cocktail_Champagne_Bellini.html";
     link[10]="Cocktail_s/Champagne/Cocktail_Champagne_BlackVelvet.html";
     link[11]="Cocktail_s/Champagne/Cocktail_Champagne_ChampagneCocktail.html";
     link[12]="Cocktail_s/Gin/Cocktail_Gin_Aviation.html";
     link[13]="Cocktail_s/Vodka/Cocktail_Vodka_AlabamaSlammer.html";
     
  
   window.location = (link[wLink]);
}


