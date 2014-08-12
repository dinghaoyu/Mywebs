$(function(){
	/*---积分榜选项卡---*/
	$(".liansaiHead").mouseover(function(){
		$(".liansaiHead[show='1']").css({"background-color":"#fff","color":"#2d374b","font-weight":"normal"});
		$(".liansaiHead[show='1']").attr("show","0");
		$(this).css({"background-color":"rgb(46, 159, 84)","color":"#fff","font-weight":"bold"});
		$(this).attr("show","1");
	});
	$("#yijiaHead").mouseover(function(){
		$("#yijia").show();
		$("#yingchao").hide();
		$("#dejia").hide();
		$("#xijia").hide();
		$("#zhongchao").hide();
	});
	$("#yingchaoHead").mouseover(function(){
		$("#yingchao").show();
		$("#yijia").hide();
		$("#xijia").hide();
		$("#dejia").hide();
		$("#zhongchao").hide();
	});
	$("#xijiaHead").mouseover(function(){
		$("#xijia").show();
		$("#yijia").hide();
		$("#yingchao").hide();
		$("#dejia").hide();
		$("#zhongchao").hide();
	});
	$("#dejiaHead").mouseover(function(){
		$("#dejia").show();
		$("#yijia").hide();
		$("#xijia").hide();
		$("#yingchao").hide();
		$("#zhongchao").hide();
	});
	$("#zhongchaoHead").mouseover(function(){
		$("#zhongchao").show();
		$("#yijia").hide();
		$("#xijia").hide();
		$("#dejia").hide();
		$("#yingchao").hide();
	});



	/*---视频区选项卡---*/
	$("#weekly").mouseover(function(){
		$(this).css({"color":"#a83100","border-bottom":"2px solid #a83100"});
		$("#latest").css({"color":"#2d374b","border-bottom":"0px"});
		$(".videoUL2").show();
		$(".videoUL1").hide();
	});
	$("#latest").mouseover(function(){
		$(this).css({"color":"#a83100","border-bottom":"2px solid #a83100"});
		$("#weekly").css({"color":"#2d374b","border-bottom":"0px"});
		$(".videoUL1").show();
		$(".videoUL2").hide();
	});
});