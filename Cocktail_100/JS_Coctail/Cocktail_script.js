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
     link[0]="http://www.google.com";
     link[1]="http://www.msn.com";
     link[2]="http://www.yahoo.com";   
     link[3]="http://www.ebay.com";
     link[4]="http://www.cnn.com";
  
   window.location = (link[wLink]);
}

