$(function(){
	$(".rep").mouseover(function(){
		addC();
		var selector =$(this);
		alert($this);
		//timer=setTimeout("addC("+ obj+")",1000);
		$(".story").hide();
		var pid= $(this).attr("picID");
		$(".story[picID="+pid+"]").show();
	});
	$(".rep").mouseout(function(){
		clearTimeout(timer);
	});

})
var timer;
function addC() {
	$(".rep").removeClass("cur");
	$("this").addClass("cur");
}