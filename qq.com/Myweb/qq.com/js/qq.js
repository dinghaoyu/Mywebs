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
	$("#jiangSuNews").mouseover(function(){
		$("#jiangsuNewsContent").css("display","block");
		$("#importantNewsContent").css("display","none");
		$("#importantNews").css("border-top","0px");
		$("#importantNews").css("font-weight","normal");
	});
	$("#importantNews").mouseover(function(){
		$("#jiangsuNewsContent").css("display","none");
		$("#importantNewsContent").css("display","block");
		$("#importantNews").css("border-top","2px solid #3b639f");
		$("#importantNews").css("font-weight","bold");	
	});
});