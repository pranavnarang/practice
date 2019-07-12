// Clicks on 'load more' button and scrolls to the bottom of the page

let numIdeas = document.getElementsByClassName("stat-number brand-color")[0].innerHTML;

 

var counter = 0;

 

var looper = setInterval(function(){

    counter++;

    num=document.getElementsByTagName("a").length;

    num -= 7;

    document.getElementsByTagName("a")[num].click();

    window.scrollTo(0,document.body.scrollHeight);

 

    if (counter >= Math.floor(numIdeas/3))

    {

        clearInterval(looper);

    }

 

}, 2000);