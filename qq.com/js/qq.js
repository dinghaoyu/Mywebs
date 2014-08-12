$(function(){
	/*选项卡*/
	$("#imNews").mouseover(function(){
		$("#jsNews").removeClass("currentContent");
		$("#imNews").addClass("currentContent");
		$("#jiangsuNewsContent").hide();
		$("#importantNewsContent").show();
	});		

	
	$("#jsNews").mouseover(function(){
		$("#imNews").removeClass("currentContent");
		$("#jsNews").addClass("currentContent");
		$("#importantNewsContent").hide();
		$("#jiangsuNewsContent").show();		

	});
	$("#jrPlay").mouseover(function(){
		$("#vidPlay").removeClass("currentContent");
		$(this).addClass("currentContent");
		$("#lm2MovieTVC").hide();
		$("#todayPlayC").show();		
	});
	$("#vidPlay").mouseover(function(){
		$("#jrPlay").removeClass("currentContent");
		$(this).addClass("currentContent");
		$("#todayPlayC").hide();
		$("#lm2MovieTVC").show();		
	});
	/*搜搜*/
	$("#sosoBarInner").hover(function(){
		$(this).css("border-color","rgb(50,151,216)");
	},function(){
		$(this).css("border-color","");
	});
	$(".serchSelected").hover(function(){
		$(this).find(".sosoList").show();
		$(this).css("background-position","-552px -200px");
	},function(){
		$(this).find(".sosoList").hide();
		$(this).css("background-position","");
	});
	$(".sosoList li").hover(function(){
		$(this).css({"background-color":"#edf3fc","color":"#6994c1"});
	},function(){
		$(this).css({"background-color":"","color":""});
	});
	$("#rightArea1R").click(function(){
		$(this).css({"left":"-353px","background-position":"-86px -162px"});
		$("#lm2RLineULC").show();
		$("#lm2RLineULC").css("left","-340px");

	});
	$(".sosoList li").click(function(){
		var txt =$(this).text();
		//alert(txt);
		$(".serchTxt").text(txt);
	});

	$("#lm2RLineULC").mouseleave(function(){
		$(this).hide();
		$("#rightArea1R").css({"left":"","background-position":""});
	});
});