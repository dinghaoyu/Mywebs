$(function(){
	$(".ftList ").click(function(){
		$(".ftList").removeClass("selected");
		$(this).addClass("selected");
	});

	$(".cList").click(function(){
		var fid = $(this).attr("frID");
		var s =$(this).attr("show");
		if(s=="0"){
			$(".ccUL[frID="+fid+"]").slideDown();
			$(this).attr("show","1");
			$(this).css("background-image",'url("css/images/open_arrow_fire.png")');
		}
		else{
			$(".ccUL[frID="+fid+"]").slideUp();
			$(this).attr("show","0");
			$(this).css("background-image","");
		}
		
	});
	$(".pannelChat").draggable({
		handle:".chatHd",
		containment: ".wrap",
		scroll: false
	});
	$(".min").click(function(){
		$(".pannelChat").animate({
		"width":"150px",
		"height":"30px",
		"top":"5%"
	},200);
		$(".pannelChat").append("点我最大化！");
	});
	$(".close").click(function(){
		$(".pannelChat").hide();
	});
	
})