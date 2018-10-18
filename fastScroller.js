
var endOfScroll;
var scrollArr = document.getElementById("scrollArr");

scrollArr.addEventListener('mouseover', function(){
    console.log('mouse is over');
    window.clearTimeout(endOfScroll);
    }
, true);

window.addEventListener('scroll', function (e){
if (document.body.scrollHeight > 1500) {
    if ( scrollY > document.body.scrollHeight - 300) {
        scrollArr.style.display = "block";
    } else if(document.body.scrollHeight < 1500) {
        scrollArr.style.display = "none";        
    } else if( scrollY>1500 ) {
        scrollArr.style.display = "block";
        window.clearTimeout(endOfScroll);
        endOfScroll = setTimeout(function(){
            if ( scrollY > document.body.scrollHeight - 300 ) {
                scrollArr.style.display = "block";
            } else {
            console.log("Scroll terminé")
            scrollArr.style.display = "none";
            }
        }, 1000);
    }
} else if (document.body.scrollHeight < 1500) {
    scrollArr.style.display = "none";
}

}, false);



scrollArr.addEventListener('click', function(){
    scrollArr.style.display = "none";
	window.scrollTo(0,0);
});

scrollArr.style.display = "none";


function fastScroll(nomPasse){
    var targetName = document.getElementById(nomPasse);
    var targetPosY = targetName.y;
    window.scrollTo(0, targetPosY - 30);
}

/*

var endOfScroll;
var scrollArr = document.getElementById("scrollArr");

scrollArr.addEventListener('mouseover', function(){
    console.log('mouse is over');
    window.clearTimeout(endOfScroll);
    }
, true);

window.addEventListener('scroll', function (e){
if (document.body.scrollHeight > 1500) {
    if ( scrollY > document.body.scrollHeight - 300) {
        scrollArr.style.display = "block";
    } else if(document.body.scrollHeight < 1500) {
        scrollArr.style.display = "none";        
    } else if( scrollY>1500 ) {
        scrollArr.style.display = "block";
        window.clearTimeout(endOfScroll);
        endOfScroll = setTimeout(function(){
            if ( scrollY > document.body.scrollHeight - 300 ) {
                scrollArr.style.display = "block";
            } else {
            console.log("Scroll terminé")
            scrollArr.style.display = "none";
            }
        }, 1000);
    }
} else if (document.body.scrollHeight < 1500) {
    scrollArr.style.display = "none";
}

}, false);



scrollArr.addEventListener('click', function(){
    scrollArr.style.display = "none";
	window.scrollTo(0,0);
});

scrollArr.style.display = "none";


function fastScroll(nomPasse){
    var targetName = document.getElementById(nomPasse);
    var targetPosY = targetName.y;
    window.scrollTo(0, targetPosY - 30);
    console.log(nomPasse);
}

*/