const selector = "#container .col-lg-2";
col4 = $(selector + ":nth-of-type(" + 5 + ")");
col3 = $(selector + ":nth-of-type(" + 4 + ")");
col2 = $(selector + ":nth-of-type(" + 2 + ")");
col1 = $(selector + ":nth-of-type(" + 1 + ")");
var aux = $(selector + ":nth-of-type(5)").offset().left;

var width = window.innerWidth || document.body.clientWidth;



$(document).ready(function(){
	if (checkCookie() == false) {
		if(width<=991){
			mobileAnimationDelay = 0;
			aux = 400;
		}
		else{
			mobileAnimationDelay = 1;
		}

		$(".welcome").css("color","black");
		col4.css({"left":-100-1*aux}).animate({"left": 0+"px"}, {duration: 3000});
		col3.css({"left":-100-1*aux}).delay(700 * mobileAnimationDelay).animate({"left": 0+"px"}, {duration: 3000});
		col2.css({"left":-100-1*aux}).delay(1000 * mobileAnimationDelay).animate({"left": 0+"px"}, {duration: 3000});
		col1.css({"left":-100-1*aux}).delay(1500 * mobileAnimationDelay).animate({"left": 0+"px"}, {duration: 3000});
		if ((window.loaded === true) && (!col4.is(':animated') && !col3.is(':animated') && !col2.is(':animated') && !col1.is(':animated') )) {
			$(".index").delay(5000).fadeOut("slow");
			$(".main-menu").delay(7000).fadeIn("slow");

		}
		else {
			$(".index").delay(6000).fadeOut("slow");
			$(".main-menu").delay(7000).fadeIn("slow");
		}
	}
	else {
		$(".index").css("display","none");
		if (window.loaded === true) {
			$(".main-menu").fadeIn("slow");

		}
		else {
			$(".main-menu").delay(1000).fadeIn("slow");
		}
	}	
});

$(window).on('load', function() {
    window.loaded = true;
    checkCookie();
});


function setCookie(cname,cvalue,exminutes) {
    var d = new Date();
    d.setTime(d.getTime() + (exminutes*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        return true;
    } else {
        setCookie("username", "usr", 5);
        return false;
    }
}

