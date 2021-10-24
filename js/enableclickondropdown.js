function onresize (){
   	w = $(window).width();
   	if (w < 1200 && $(".main-nav-item").hasClass("disabled")) {
   		console.log("hola");
   		$(".main-nav-item").removeClass("disabled");
   		
   	}
   	else if(w >= 1200 && !$(".main-nav-item").hasClass("disabled")) {
   		console.log("hola0");
   		$(".main-nav-item").addClass("disabled");	
   	}
}
$(window).resize(onresize); 
// first time;
onresize ();