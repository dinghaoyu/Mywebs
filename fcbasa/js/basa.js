$(function(){
	$(".hdList").click(function(){
		var tid=$(this).attr("titleID");
		$(".hdList").removeClass("cur");
		$(this).addClass("cur");
		$(".bdUl").hide();		
		$(".bdUl[titleID="+tid+"]").show();
	});
	/*焦点图*/
	$(".trList").click(function(){
		count=$(this).attr("picID");
		showPic();
	});
	$(".picMain").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval("showPic()",3000);
	});
	$(".trList").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval("showPic()",3000);
	});
	timer = setInterval("showPic()",3000);
});
var count=2;
var timer;
function showPic(){
	if(count==5){count=1};
	$(".picMain").fadeOut();
	$(".picMain[picID="+count+"]").fadeIn();
	count++;
}