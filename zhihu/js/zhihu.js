$(function(){
	$(".rep").mouseover(function(){
		var pid= $(this).attr("picID");
		//addC(pid);
		timer=setTimeout("addC("+pid+")",500);
		
	});
	$(".rep").mouseout(function(){
		clearTimeout(timer);
	});

})
var timer;
function addC(pid) {
	$(".rep").removeClass("cur");
	$(".rep[picID="+pid+"]").addClass("cur");
	$(".story").fadeOut();
	$(".story[picID="+pid+"]").fadeIn();
	var t = 21+72*Math.floor((pid-1)/3);
	$(".arrow").css("top",t+"px");
}