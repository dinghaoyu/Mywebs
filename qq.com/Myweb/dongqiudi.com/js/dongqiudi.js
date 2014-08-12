$(function(){
	/*---积分榜选项卡---*/
	$("#yijiaHead").mouseover(function(){
		$(this).css({"background-color":"rgb(46, 159, 84)","color":"#fff","font-weight":"bold"});
		$("#yingchaoHead").css({"background-color":"#fff","color":"#2d374b","font-weight":"normal"});
		$("#dejiaHead").css({"background-color":"#fff","color":"#2d374b","font-weight":"normal"});
		$("#xijiaHead").css({"background-color":"#fff","color":"#2d374b","font-weight":"normal"});
		$("#zhongchaoHead").css({"background-color":"#fff","color":"#2d374b","font-weight":"normal"});
		$("#yijia").show();
		$("#yingchao").hide();
		$("#dejia").hide();
		$("#xijia").hide();
		$("#zhongchao").hide();
	});
	$("#yingchaoHead").mouseover(function(){
		$(this).css({"background-color":"rgb(46, 159, 84)","color":"#fff","font-weight":"bold"});
		$("#yijiaHead").css({"background-color":"#fff","color":"#2d374b","font-weight":"normal"});
		$("#yingchao").show();
		$("#yijia").hide();
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