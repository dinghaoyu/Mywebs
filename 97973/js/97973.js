$(function(){
	//导航栏特效
	$(".ios").hover(function(){
		$(this).css({"background-position":"-178px -54px","color":"rgb(47,142,209)"});
	}
		,function(){
			$(this).css({"background-position":"-178px 0px","color":"rgb(194,194,194)"});
		}
	);
	$(".anzhuo").hover(function(){
		$(this).css({"background-position":"-266px -54px","color":"rgb(22,143,68)"});
	}
		,function(){
			$(this).css({"background-position":"-266px 0px","color":"rgb(194,194,194)"});
		}
	);

	$(".mainlevel").mouseover(function(){
		$(this).css({"background-position":"55px -55px","background-color":"#373737"});
		$(this).find(".subNav").show();
	});
	$(".mainlevel").mouseleave(function(){
		$(this).css({"background-position":"55px 0px","background-color":""});
		$(this).find(".subNav").hide();
	});
	$(".subNav li").hover(function(){
		$(this).css("background-color","#656565");
	}
		,function(){
			$(this).css("background-color","");
		});
	/*banner图片特效*/
	$(".bst").hover(function(){
		$(this).find(".boxTitle").css("color","rgb(47,142,209)");
		$(this).find(".alpha").css("opacity","1");
		$(this).find(".boxLink a").css("color","rgb(47,142,209)");
	}

		,function(){
			$(this).find(".boxTitle").css("color","");
			$(this).find(".alpha").css("opacity","");
			$(this).find(".boxLink a").css("color","");
		});
	$(".share1").hover(function(){
		$(this).css("background-position","-68px -92px");
	},function(){
		$(this).css("background-position","");
	});
	$(".share2").hover(function(){
		$(this).css("background-position","-34px -92px");
	},function(){
		$(this).css("background-position","");
	});
	$(".share3").hover(function(){
		$(this).css("background-position","-0px -92px");
	},function(){
		$(this).css("background-position","");
	});
	/*换一换*/
	$("#huan").click(function(){
		var s = $(".ioshuan").css("left");
		var ss=parseInt(s);
		var sss= -(Math.abs(ss+1160));
		sss+="px";
		$(".ioshuan").css("left",sss);
	});
	$(".box").hover(function(){
		//alert();
		$(this).find("p").css("color","#25aafc");
	}
		,function(){
			$(this).find("p").css("color","");
		});
	/*视屏区图片效果*/
	$(".bigBox").hover(function(){
		$(this).find(".start").css("background-position","-98px 0");
		$(this).find(".videoDes").css("color","#35aafc");
	}
		,function(){
			$(this).find(".start").css("background-position","");
		$(this).find(".videoDes").css("color","");
		});
	$(".smallBox").hover(function(){
		$(this).find(".start").css("background-position","-100px -105px");
		$(this).find(".videoDes").css("color","#35aafc");
	}
		,function(){
			$(this).find(".start").css("background-position","");
		$(this).find(".videoDes").css("color","");
		});
	
});