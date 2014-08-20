$(function(){
	/*左侧顶端浮动条*/
	$(window).scroll(function(){
		var t = $(window).scrollTop();
		//alert(t);
		if(t>334) {
			$(".talklistTab").addClass("talkfixed");
		};
		if(t<=334){
			$(".talklistTab").removeClass("talkfixed");
		};
	});	
	/*导航栏特效*/
	$(".nlList").hover(function(){
		$(this).css("background-color","#000");
		
	},function(){
		$(this).css("background-color","");
	});
	$(".nrList").hover(function(){
		$(this).css("background-color","#000");
	},function(){
		$(this).css("background-color","");
	});
	/*图片缩小放大*/
	$(".sm").click(function(){
		$(this).hide();
		$(this).parent().next().show();
	});
	$(".bm").click(function(){
		$(this).parent().parent().hide();
		$(this).parent().parent().prev().find(".sm").show();
	});
});
