$(function(){
	/*导航栏滑动*/
	$(".navJ").hover(function(){
		$(this).find(".navLList").show();
	},function(){
		$(this).find(".navLList").hide();
	});
	/*播放*/
	$(".playS").click(function(){
		var s = $(this).attr("show");
		if (s==1) {
			$(this).css("background-position","0 -224px");
			$(this).attr("show","0");
		}
		else{
			$(this).css("background-position","");
			$(this).attr("show","1");
		}
	});
	/*文字滑动*/
	$(".sright").click(function(){
		//alert();
		textSlide();
	});
	$(".scUL").hover(function(){
		clearTimeout(timer);
	},function(){
		timer=setInterval("textSlide()",3000);
	});
	timer=setInterval("textSlide()",3000);
});
var count=1;
var timer;
function textSlide(){
	if(count==4){count=0}
	var sc = -count*600;
	var sr = count+1;
	$(".scUL").animate({left:sc+"px"},2000,"easeOutElastic");
	$(".sPic").fadeOut();
	$(".s"+sr).fadeIn();
	count++;
}